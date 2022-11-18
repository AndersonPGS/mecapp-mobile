import { Button, Center, HStack, Text } from "native-base";
import React, { useEffect, useState } from "react";

export default function Home() {
  const fulltuningTypes = ["Sem Full Tuning", "LV3 - Sem Blindagem", "LV3 - Com Blindagem", "LV4 - Sem Blindagem", "LV4 - Com Blindagem"]
  const transmissionTypes = ["Nível 0", "Nível 1", "Nível 2", "Nível 3", "Nível 4"]
  const suspensionTypes = ["Nível 0", "Nível 1", "Nível 2", "Nível 3", "Nível 4"]
  const engineTypes = ["Nível 0", "Nível 1", "Nível 2", "Nível 3", "Nível 4"]
  const brakeTypes = ["Nível 0", "Nível 1", "Nível 2", "Nível 3", "Nível 4"]
  const shieldTypes = ["Nível 0", "Nível 1", "Nível 2", "Nível 3", "Nível 4", "Nível 5"]
  const turboTypes = ["Não", "Sim"]

  const [selledKits, setSelledKits] = useState(0)
  const [selledPneus, setSelledPneus] = useState(0)

  const [isPartner, setIsPartner] = useState(false)
  const [countKits, setCountKits] = useState(0)
  const [countPneus, setCountPneus] = useState(0)

  const [priceFullTuning, setPriceFullTuning] = useState(0)
  const [priceTransmission, setPriceTransmission] = useState(0)
  const [priceSuspension, setPriceSuspension] = useState(0)
  const [priceEngine, setPriceEngine] = useState(0)
  const [priceBrake, setPriceBrake] = useState(0)
  const [priceShield, setPriceShield] = useState(0)
  const [priceTurbo, setPriceTurbo] = useState(0)

  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    let costPerKit = isPartner ? 2000 : 2500
    let costPerPneu = isPartner ? 500 : 600

    let costKits = costPerKit * countKits
    let costPneus = costPerPneu * countPneus

    let totalCost = costKits + costPneus

    if (priceFullTuning != 0) {
      totalCost = totalCost + priceFullTuning
    } else {
      totalCost = totalCost + priceTransmission + priceSuspension + priceEngine + priceBrake + priceShield + priceTurbo
    }

    setTotalPrice(totalCost)
  },
    [
      countKits,
      countPneus,
      priceFullTuning,
      priceTransmission,
      priceSuspension,
      priceEngine,
      priceBrake,
      priceShield,
      priceTurbo
    ]
  )

  function onFinished() {
    setSelledKits((selledKits) => selledKits + countKits)
    setSelledPneus((selledPneus) => selledPneus + countPneus)

    setCountKits(0)
    setCountPneus(0)
  }

  function decreaseKits() {
    if (countKits > 0) {
      setCountKits((countKits) => countKits - 1)
    }
  }

  function increaseKits() {
    setCountKits((countKits) => countKits + 1)
  }

  function decreasePneus() {
    if (countPneus > 0) {
      setCountPneus((countPneus) => countPneus - 1)
    }
  }

  function increasePneus() {
    setCountPneus((countPneus) => countPneus + 1)
  }

  function selectionFullTuning(type: number) {
    switch (type) {
      case 0:
        //Sem Full Tuning
        setPriceFullTuning(0)
        break;
      case 1:
        //Level 3 - Sem Blindagem
        setPriceFullTuning(127000)
        break;
      case 2:
        //Level 3 - Com Blindagem
        setPriceFullTuning(215000)
        break;
      case 3:
        //Level 4 - Sem Blindagem
        setPriceFullTuning(160000)
        break;
      case 4:
        //Level 4 - Com Blindagem
        setPriceFullTuning(247000)
    }
  }

  function selectionTransmission(type: number) {
    switch (type) {
      case 0:
        //Level 0
        setPriceTransmission(0)
        break;
      case 1:
        //Level 1
        setPriceTransmission(15000)
        break;
      case 2:
        //Level 2
        setPriceTransmission(21000)
        break;
      case 3:
        //Level 3
        setPriceTransmission(28000)
        break;
      case 4:
        //Level 4
        setPriceTransmission(36000)
    }
  }

  function selectionSuspension(type: number) {
    switch (type) {
      case 0:
        //Level 0
        setPriceSuspension(0)
        break;
      case 1:
        //Level 1
        setPriceSuspension(15000)
        break;
      case 2:
        //Level 2
        setPriceSuspension(21000)
        break;
      case 3:
        //Level 3
        setPriceSuspension(28000)
        break;
      case 4:
        //Level 4
        setPriceSuspension(36000)
    }
  }

  function selectionEngine(type: number) {
    switch (type) {
      case 0:
        //Level 0
        setPriceEngine(0)
        break;
      case 1:
        //Level 1
        setPriceEngine(15000)
        break;
      case 2:
        //Level 2
        setPriceEngine(21000)
        break;
      case 3:
        //Level 3
        setPriceEngine(28000)
        break;
      case 4:
        //Level 4
        setPriceEngine(37000)
    }
  }

  function selectionBrake(type: number) {
    switch (type) {
      case 0:
        //Level 0
        setPriceBrake(0)
        break;
      case 1:
        //Level 1
        setPriceBrake(15000)
        break;
      case 2:
        //Level 2
        setPriceBrake(21000)
        break;
      case 3:
        //Level 3
        setPriceBrake(28000)
        break;
      case 4:
        //Level 4
        setPriceBrake(36000)
    }
  }

  function selectionShield(type: number) {
    switch (type) {
      case 0:
        //Level 0
        setPriceShield(0)
        break;
      case 1:
        //Level 1
        setPriceShield(28000)
        break;
      case 2:
        //Level 2
        setPriceShield(43000)
        break;
      case 3:
        //Level 3
        setPriceShield(58000)
        break;
      case 4:
        //Level 4
        setPriceShield(73000)
        break;
      case 5:
        //Level 4
        setPriceShield(88000)
    }
  }

  function selectionTurbo(type: number) {
    switch (type) {
      case 0:
        //Sem Turbo
        setPriceTurbo(0)
        break;
      case 1:
        //Com Turbo
        setPriceTurbo(15000)
    }
  }


  return (
    <Center w="full" bg="black" safeArea>
      <HStack minW="300" w="90%" maxW="full" my={5} p={5} bg="gray.900" rounded="2xl">
        <Center height="130" m={4} flex={.5}>
          <Text fontSize="100" fontFamily="inter" color="white" w="full" textAlign="center" bold>{selledKits}</Text>
          <Text fontSize="30" fontFamily="inter" color="gray.400" w="full" textAlign="center">KITS</Text>
        </Center>
        <Center height="130" m={4} flex={.5}>
          <Text fontSize="100" fontFamily="inter" color="white" w="full" textAlign="center" bold >{selledPneus}</Text>
          <Text fontSize="30" fontFamily="inter" color="gray.400" w="full" textAlign="center">PNEUS</Text>
        </Center>
      </HStack>

      <HStack minW="300" w="90%" maxW="full" my={5}>
        <Center m={4} py={4} px={8} flex={.5} bg="gray.900" rounded="2xl">
          <Text fontSize="25" fontFamily="inter" fontWeight="400" color="gray.400" textAlign="center" w="full">KIT</Text>
          <Text fontSize="70" fontFamily="inter" color="white" textAlign="center" w="full" bold>{countKits}</Text>
          <HStack space="30%">
            <Button w="12" h="10" bg="gray.700" _text={{ fontFamily: "inter", fontSize: 30, lineHeight: 30, fontWeight: 800 }} rounded="lg" onPress={decreaseKits}>-</Button>
            <Button w="12" h="10" bg="gray.700" _text={{ fontFamily: "inter", fontSize: 30, lineHeight: 30, fontWeight: 800 }} rounded="lg" onPress={increaseKits}>+</Button>
          </HStack>
        </Center>

        <Center m={4} py={4} px={8} flex={.5} bg="gray.900" rounded="2xl">
          <Text fontSize="25" fontFamily="inter" fontWeight="400" color="gray.400" textAlign="center" w="full">PNEU</Text>
          <Text fontSize="70" fontFamily="inter" color="white" textAlign="center" w="full" bold>{countPneus}</Text>
          <HStack space="30%">
            <Button w="12" h="10" bg="gray.700" _text={{ fontFamily: "inter", fontSize: 30, lineHeight: 30, fontWeight: 800 }} rounded="lg" onPress={decreasePneus}>-</Button>
            <Button w="12" h="10" bg="gray.700" _text={{ fontFamily: "inter", fontSize: 30, lineHeight: 30, fontWeight: 800 }} rounded="lg" onPress={increasePneus}>+</Button>
          </HStack>
        </Center>
      </HStack>

      {/* <ComponentsContainer>
          <ComponentContainer>
            <ComponentTitle>Full Tuning</ComponentTitle>
            <Select
              // selectedValue={service}
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
                selectionFullTuning(index)
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
            <Select
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
                selectionTransmission(index)
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
            <Select
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
                selectionSuspension(index)
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
            <Select
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
                selectionEngine(index)
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
            <Select
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
                selectionBrake(index)
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
            <ComponentTitle>Blindagem</ComponentTitle>
            <Select
              data={shieldTypes}
              defaultValueByIndex={0}
              buttonStyle={buttonSelectStyles}
              buttonTextStyle={buttonSelectTextStyles}
              rowStyle={buttonSelectStyles}
              rowTextStyle={buttonSelectTextStyles}
              renderDropdownIcon={isOpened => {
                return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#FFF'} size={18} />;
              }}
              onSelect={(selectedItem, index) => {
                selectionShield(index)
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
            <Select
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
                selectionTurbo(index)
              }}
              buttonTextAfterSelection={(selectedItem) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
            />
          </ComponentContainer>

        </ComponentsContainer> */}

      {/* <TotalContainer>
          <TotalValueText>$  <TextValue>{totalPrice}</TextValue></TotalValueText>
          <FinishButton onPress={onFinished}><TextFinish>FINALIZAR</TextFinish></FinishButton>
        </TotalContainer> */}
    </Center>
  );
}

