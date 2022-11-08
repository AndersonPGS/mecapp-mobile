import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { ComponentContainer, ComponentsContainer, ComponentTitle, Container, CounterContainer, FinishButton, ItensContainer, Number, SafeArea, SellerButton, SellerButtonContainer, SellerContainer, SellerItem, TextButton, TextFinish, TextValue, Title, TotalContainer, TotalValueText } from "./styles";

export default function Home() {
  const fulltuningTypes = ["Sem Full Tuning", "LV3 - Sem Blindagem", "LV3 - Com Blindagem", "LV4 - Sem Blindagem", "LV4 - Com Blindagem"]
  const transmissionTypes = ["Nível 0", "Nível 1", "Nível 2", "Nível 3", "Nível 4"]
  const suspensionTypes = ["Nível 0", "Nível 1", "Nível 2", "Nível 3", "Nível 4"]
  const engineTypes = ["Nível 0", "Nível 1", "Nível 2", "Nível 3", "Nível 4"]
  const brakeTypes = ["Nível 0", "Nível 1", "Nível 2", "Nível 3", "Nível 4"]
  const turboTypes = ["Não", "Sim"]

  const buttonSelectStyles = {
    backgroundColor: "#222224",
    width: "100%",
    borderRadius: 12,
  }

  const buttonSelectTextStyles = {
    color: "#fff",
    fontFamily: "Inter-Regular",
  }
  return (
    <Container>
      <SafeArea>
        <CounterContainer>
          <ItensContainer>
            <Number>15</Number>
            <Title>KITS</Title>
          </ItensContainer>
          <ItensContainer>
            <Number>28</Number>
            <Title>PNEUS</Title>
          </ItensContainer>
        </CounterContainer>

        <SellerContainer>
          <SellerItem>
            <Title>KIT</Title>
            <Number>0</Number>
            <SellerButtonContainer>
              <SellerButton><TextButton>-</TextButton></SellerButton>
              <SellerButton><TextButton>+</TextButton></SellerButton>
            </SellerButtonContainer>
          </SellerItem>

          <SellerItem>
            <Title>PNEU</Title>
            <Number>0</Number>
            <SellerButtonContainer>
              <SellerButton><TextButton>-</TextButton></SellerButton>
              <SellerButton><TextButton>+</TextButton></SellerButton>
            </SellerButtonContainer>
          </SellerItem>
        </SellerContainer>

        <ComponentsContainer>
          <ComponentContainer>
            <ComponentTitle>Full Tuning</ComponentTitle>
            <SelectDropdown
              data={fulltuningTypes}
              defaultValueByIndex={0}
              buttonStyle={buttonSelectStyles}
              buttonTextStyle={buttonSelectTextStyles}
              rowStyle={buttonSelectStyles}
              rowTextStyle={buttonSelectTextStyles}
              renderDropdownIcon={isOpened => {
                return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#FFF'} size={18} />;
              }}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
            />
          </ComponentContainer>

          <ComponentContainer>
            <ComponentTitle>Transmissão</ComponentTitle>
            <SelectDropdown
              data={transmissionTypes}
              defaultValueByIndex={0}
              buttonStyle={buttonSelectStyles}
              buttonTextStyle={buttonSelectTextStyles}
              rowStyle={buttonSelectStyles}
              rowTextStyle={buttonSelectTextStyles}
              renderDropdownIcon={isOpened => {
                return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#FFF'} size={18} />;
              }}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
            />
          </ComponentContainer>

          <ComponentContainer>
            <ComponentTitle>Suspensão</ComponentTitle>
            <SelectDropdown
              data={suspensionTypes}
              defaultValueByIndex={0}
              buttonStyle={buttonSelectStyles}
              buttonTextStyle={buttonSelectTextStyles}
              rowStyle={buttonSelectStyles}
              rowTextStyle={buttonSelectTextStyles}
              renderDropdownIcon={isOpened => {
                return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#FFF'} size={18} />;
              }}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
            />
          </ComponentContainer>

          <ComponentContainer>
            <ComponentTitle>Motor</ComponentTitle>
            <SelectDropdown
              data={engineTypes}
              defaultValueByIndex={0}
              buttonStyle={buttonSelectStyles}
              buttonTextStyle={buttonSelectTextStyles}
              rowStyle={buttonSelectStyles}
              rowTextStyle={buttonSelectTextStyles}
              renderDropdownIcon={isOpened => {
                return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#FFF'} size={18} />;
              }}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
            />
          </ComponentContainer>

          <ComponentContainer>
            <ComponentTitle>Freio</ComponentTitle>
            <SelectDropdown
              data={brakeTypes}
              defaultValueByIndex={0}
              buttonStyle={buttonSelectStyles}
              buttonTextStyle={buttonSelectTextStyles}
              rowStyle={buttonSelectStyles}
              rowTextStyle={buttonSelectTextStyles}
              renderDropdownIcon={isOpened => {
                return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#FFF'} size={18} />;
              }}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
            />
          </ComponentContainer>

          <ComponentContainer>
            <ComponentTitle>Turbo</ComponentTitle>
            <SelectDropdown
              data={turboTypes}
              defaultValueByIndex={0}
              buttonStyle={buttonSelectStyles}
              buttonTextStyle={buttonSelectTextStyles}
              rowStyle={buttonSelectStyles}
              rowTextStyle={buttonSelectTextStyles}
              renderDropdownIcon={isOpened => {
                return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#FFF'} size={18} />;
              }}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
            />
          </ComponentContainer>

        </ComponentsContainer>

        <TotalContainer>
          <TotalValueText>$  <TextValue>154000</TextValue></TotalValueText>
          <FinishButton><TextFinish>FINALIZAR</TextFinish></FinishButton>
        </TotalContainer>
      </SafeArea>
    </Container>
  );
}

