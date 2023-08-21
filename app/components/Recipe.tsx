import { Button, Icon, Input, Layout, List, ListItem, Text } from '@ui-kitten/components'
import React, { useEffect, useState } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components/native'
import { SwipeRow } from 'react-native-swipe-list-view'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { Ionicons } from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

interface Ingredient {
	ingredients: string[]
	purpose: string | null
}

export interface RecipeProps {
	author: string
	canonical_url: string
	category: string
	host: string
	image: string
	ingredient_groups: Ingredient[]
	ingredients: string[]
	instructions: string
	instructions_list: string[]
	language: string
	nutrients: {
		[key: string]: string
	}
	ratings: number
	site_name: string
	title: string
	total_time: number
	yields: string
}

interface RecipeCardProps {
	recipe: RecipeProps
}

const StyledInput = styled(Input)`
	margin: 5px;
`

const StyledLayout = styled(ListItem)`
	min-height: 44px;
	border: 1px solid #e4e9f2;
	background-color: #f7f9fc;
	padding-vertical: 7px;
	padding-left: 20px;
	padding-right: 30px;
	display: flex;
	align-items: center;
	flex-direction: row;
	box-sizing: border-box;
	margin: 5px;
	max-inline-size: 50ch;
`

const AddButton = styled(TouchableOpacity)`
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;

	min-height: 44px;
	border: 1px solid #e4e9f2;
	background-color: #f7f9fc;
	padding-vertical: 7px;
	padding-left: 20px;
	padding-right: 30px;
	margin: 5px;
`

const Title = styled(Text)`
	margin-top: 5px;
	margin-left: 5px;
`

const CustomCloseButtonContainer = styled(TouchableOpacity)`
	padding: 8px;
	position: absolute;
	right: 2px;
`

const CustomCloseButtonIcon = styled(Ionicons)`
	font-size: 15px;
	color: #222b45;
`

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
	const [editedRecipe, setEditedRecipe] = useState(recipe)
	const [editingField, setEditingField] = useState<string | null>(null)

	const handleArrayChange = (
		fieldName: keyof RecipeProps,
		index: number,
		value: string,
		isDelete: boolean = false,
	) => {
		//@ts-ignore
		const newArray = [...editedRecipe[fieldName]]

		if (isDelete) {
			newArray.splice(index, 1)
		} else {
			newArray[index] = value
		}

		handleFieldChange(fieldName, newArray)
	}

	const addField = (fieldName: keyof RecipeProps) => {
		const length = (editedRecipe[fieldName] as any[]).length
		handleArrayChange(fieldName, length, '')
	}

	const handleFieldChange = (fieldName: keyof RecipeProps, value: string | number | string[]) =>
		setEditedRecipe((prevRecipe) => ({
			...prevRecipe,
			[fieldName]: value,
		}))

	const startEditingField = (fieldName: keyof RecipeProps) => setEditingField(fieldName)

	const renderItem = (label: string, fieldName: keyof RecipeProps): React.ReactElement => {
		if (editingField === fieldName) {
			return (
				<StyledInput
					placeholder={label}
					autoFocus
					//@ts-ignore
					value={editedRecipe[fieldName]}
					onChangeText={(text: string | number | string[]) =>
						handleFieldChange(fieldName, text)
					}
					onBlur={() => setEditingField(null)}
				/>
			)
		} else {
			return (
				<StyledLayout style={{ borderRadius: 4 }} onPress={() => startEditingField(fieldName)}>
					<Text>
						{/* @ts-ignore */}
						{editedRecipe[fieldName]}
					</Text>
				</StyledLayout>
			)
		}
	}

	const CustomCloseButton = ({
		index,
		fieldName,
	}: {
		index: number
		fieldName: keyof RecipeProps
	}) => (
		<CustomCloseButtonContainer onPress={() => handleArrayChange(fieldName, index, '', true)}>
			<CustomCloseButtonIcon name='close' />
		</CustomCloseButtonContainer>
	)

	const renderIngredientsInstructions = (
		label: string,
		value: string,
		fieldName: keyof RecipeProps,
		onChange: (text: string) => void,
		index: number,
	): React.ReactElement => {
		if (editingField === `${index}-${fieldName}`) {
			return (
				<StyledInput
					multiline
					key={`${index}-${fieldName}`}
					placeholder={label}
					autoFocus
					//@ts-ignore
					value={value}
					onChangeText={(text: string) => onChange(text)}
					onBlur={() => setEditingField(null)}
				/>
			)
		} else {
			return (
				<StyledLayout
					style={{ borderRadius: 4 }}
					onPress={() => startEditingField(`${index}-${fieldName}` as any)}>
					<Text>
						{/* @ts-ignore */}
						{value}
					</Text>
					<CustomCloseButton index={index} fieldName={fieldName} />
				</StyledLayout>
			)
		}
	}

	return (
		<Layout>
			<Image
				style={{ height: 200, borderRadius: 16, marginTop: 20, marginBottom: 10 }}
				source={{ uri: editedRecipe.image }}
			/>
			<Title>Recipe:</Title>
			{renderItem('Recipe Title', 'title')}
			<Title>Author:</Title>
			{renderItem('Author', 'author')}
			<Title>Yield:</Title>
			{renderItem('Yield', 'yields')}
			<Title>Ingredients:</Title>
			{editedRecipe.ingredients.map((ingredients, index) =>
				renderIngredientsInstructions(
					ingredients,
					ingredients,
					'ingredients',
					(text: string) => handleArrayChange('ingredients', index, text),
					index,
				),
			)}
			<AddButton onPress={() => addField('ingredients')}>
				<CustomCloseButtonIcon name='add' />
			</AddButton>
			<Title>Instructions:</Title>
			{editedRecipe.instructions_list.map((instruction, index) => {
				const pattern = /step\s+(\d+)/gi
				if (!instruction.length || !instruction.match(pattern)) {
					return renderIngredientsInstructions(
						instruction,
						instruction,
						'instructions_list',
						(text: string) => handleArrayChange('instructions_list', index, text),
						index,
					)
				}
				return <></>
			})}
			<AddButton onPress={() => addField('instructions_list')}>
				<CustomCloseButtonIcon name='add' />
			</AddButton>
		</Layout>
	)
}
