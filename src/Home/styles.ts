import styled from "styled-components/native";


export const Container = styled.ScrollView`
  flex: 1;
  background-color: #141416;
  padding: 24px;
`;

export const SafeArea = styled.SafeAreaView`
flex: 1;
`

export const CounterContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: #29292B;
  margin-top: 15px;
  width: 100%;
  height: 150px;
  border-radius: 20px;
`;

export const ItensContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 40%;
`

export const Number = styled.Text`
text-align: center;
  color: #fff;
  font-size: 64px;
  width: 100%;
  font-family: "Inter-Bold";
`

export const Title = styled.Text`
text-align: center;
  color: #707070;
  font-size: 24px;
  width: 100%;
  font-family: "Inter-Regular";
`

export const SellerContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 35px;
  border-radius: 20px;
`;

export const SellerItem = styled.View`
  display: flex;
  background-color: #29292B;
  width: 45%;
  border-radius: 20px;
  padding: 15px;
`;

export const SellerButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const SellerButton = styled.TouchableOpacity`
  
  background-color: #1C1C1E;
  width: 50px;
  height: 50px;
  border-radius: 15px;
  
`

export const TextButton = styled.Text`
  text-align: center;
  font-size: 48px;
  line-height: 56px;
  font-family: "Inter-Regular";
  color: #fff;
`

export const ComponentContainer = styled.View`
  margin-top: 20px;
  width: 100%;

`

export const ComponentsContainer = styled.View`
  margin-top: 20px;
  width: 100%;
  padding-bottom: 20px;
`

export const ComponentTitle = styled.Text`
  font-size: 24px;
  color: #fff;
  font-family: "Inter-Regular";
  padding: 15px;
`

export const TotalContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;
  margin-top: 60px;
  background-color: #1C1C1E;
  border-radius: 15px;
  width: 100%;
`

export const TotalValueText = styled.Text`
  color: #707070;
  font-family: "Inter-Bold";
  font-size: 28px;
  margin-left: 20px;
`

export const TextValue = styled.Text`
  color: #fff;
  font-family: "Inter-Black";
`

export const FinishButton = styled.TouchableOpacity`
  color: #141416;
  padding: 20px 40px;
  background-color: #55FF9E;
  border-radius: 15px;
`

export const TextFinish = styled.Text`
  font-family: "Inter-Bold";
  font-size: 24px;
`
