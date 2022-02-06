import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: flex-start;
   flex-direction: column;
   width: 100%;
   height: 100%;
   padding: 15px;
`
const Row = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-direction: row;
   width: 100%;
   height: auto;
   margin-bottom: 15px;
`
const PFP = styled.img`
   width: 85px;
   height: 85px;
   border-radius: 100;
`

const ProfileContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-direction: row;
   width: 240px;
   height: 100%;
`
const Socials = styled.Text``
const Bio = styled.Text``
const BioContainer = styled.div`
   width: 100%;
   height: auto;
   padding-top: 5px;
`
const NameContainer = styled.div`
   display: flex;
   align-items: flex-start;
   justify-content: flex-start;
   flex-direction: row;
   width: 100%;
   height: auto;
`
const Name = styled.p`
   font-weight: 500;
`
const Pronouns = styled.p`
   color: #545454;
   margin-left: 7px;
`
const AboutMeContainer = styled.div`
   display: flex;
   align-items: flex-start;
   justify-content: flex-start;
   width: 100%;
   height: 100%;
`
const EngagementContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: flex-start;
   flex-direction: column;
   margin-right: 20px;
   width: auto;
   height: auto;
`
const Count = styled.p``
const CountCategory = styled.p``

const RecipeContainer = styled.p``
const Account: React.FC = () => {
   return (
      <Container>
         <Row>
            <PFP src="https://firebasestorage.googleapis.com/v0/b/numeal-c737e.appspot.com/o/IMG_7792.JPG?alt=media&token=67582630-77d9-402b-89d8-777d9e56e99b" />
            <ProfileContainer>
               <EngagementContainer>
                  <Count>41</Count>
                  <CountCategory>Recipes</CountCategory>
               </EngagementContainer>
               <EngagementContainer>
                  <Count>394</Count>
                  <CountCategory>Followers</CountCategory>
               </EngagementContainer>
               <EngagementContainer>
                  <Count>116</Count>
                  <CountCategory>Following</CountCategory>
               </EngagementContainer>
            </ProfileContainer>
         </Row>
         <Row>
            <AboutMeContainer>
               <NameContainer>
                  <Name>Tobias Fischer</Name>
                  <Pronouns>He/Him</Pronouns>
               </NameContainer>
               <BioContainer>
                  <Bio>This is my bio lol</Bio>
               </BioContainer>
            </AboutMeContainer>
         </Row>
         <Row>
            <RecipeContainer>a</RecipeContainer>
         </Row>
      </Container>
   )
}

export default Account
