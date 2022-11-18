import { Button, Center, HStack, ScrollView, Select, Text, VStack } from "native-base";
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

  const [valueFullTuning, setValueFullTuning] = useState("0")
  const [valueTransmission, setValueTransmission] = useState("0")
  const [valueSuspension, setValueSuspension] = useState("0")
  const [valueEngine, setValueEngine] = useState("0")
  const [valueBrake, setValueBrake] = useState("0")
  const [valueShield, setValueShield] = useState("0")
  const [valueTurbo, setValueTurbo] = useState("0")

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

  function selectionFullTuning(value: string) {
    switch (value) {
      case "0":
        //Sem Full Tuning
        setPriceFullTuning(0)
        setValueFullTuning(value)
        break;
      case "1":
        //Level 3 - Sem Blindagem
        setPriceFullTuning(127000)
        setValueFullTuning(value)

        //Set all selection default
        setPriceTransmission(0)
        setValueTransmission("0")
        setPriceSuspension(0)
        setValueSuspension("0")
        setPriceEngine(0)
        setValueEngine("0")
        setPriceBrake(0)
        setValueBrake("0")
        setPriceShield(0)
        setValueShield("0")
        setPriceTurbo(0)
        setValueTurbo("0")
        break;
      case "2":
        //Level 3 - Com Blindagem
        setPriceFullTuning(215000)
        setValueFullTuning(value)

        //Set all selection default
        setPriceTransmission(0)
        setValueTransmission("0")
        setPriceSuspension(0)
        setValueSuspension("0")
        setPriceEngine(0)
        setValueEngine("0")
        setPriceBrake(0)
        setValueBrake("0")
        setPriceShield(0)
        setValueShield("0")
        setPriceTurbo(0)
        setValueTurbo("0")
        break;
      case "3":
        //Level 4 - Sem Blindagem
        setPriceFullTuning(160000)
        setValueFullTuning(value)

        //Set all selection default
        setPriceTransmission(0)
        setValueTransmission("0")
        setPriceSuspension(0)
        setValueSuspension("0")
        setPriceEngine(0)
        setValueEngine("0")
        setPriceBrake(0)
        setValueBrake("0")
        setPriceShield(0)
        setValueShield("0")
        setPriceTurbo(0)
        setValueTurbo("0")
        break;
      case "4":
        //Level 4 - Com Blindagem
        setPriceFullTuning(247000)
        setValueFullTuning(value)

        //Set all selection default
        setPriceTransmission(0)
        setValueTransmission("0")
        setPriceSuspension(0)
        setValueSuspension("0")
        setPriceEngine(0)
        setValueEngine("0")
        setPriceBrake(0)
        setValueBrake("0")
        setPriceShield(0)
        setValueShield("0")
        setPriceTurbo(0)
        setValueTurbo("0")
    }
  }

  function selectionTransmission(value: string) {
    switch (value) {
      case "0":
        //Level 0
        setPriceTransmission(0)
        setValueTransmission(value)
        break;
      case "1":
        //Level 1
        setPriceTransmission(15000)
        setValueTransmission(value)
        break;
      case "2":
        //Level 2
        setPriceTransmission(21000)
        setValueTransmission(value)
        break;
      case "3":
        //Level 3
        setPriceTransmission(28000)
        setValueTransmission(value)
        break;
      case "4":
        //Level 4
        setPriceTransmission(36000)
        setValueTransmission(value)
    }
  }

  function selectionSuspension(value: string) {
    switch (value) {
      case "0":
        //Level 0
        setPriceSuspension(0)
        setValueSuspension(value)
        break;
      case "1":
        //Level 1
        setPriceSuspension(15000)
        setValueSuspension(value)
        break;
      case "2":
        //Level 2
        setPriceSuspension(21000)
        setValueSuspension(value)
        break;
      case "3":
        //Level 3
        setPriceSuspension(28000)
        setValueSuspension(value)
        break;
      case "4":
        //Level 4
        setPriceSuspension(36000)
        setValueSuspension(value)
    }
  }

  function selectionEngine(value: string) {
    switch (value) {
      case "0":
        //Level 0
        setPriceEngine(0)
        setValueEngine(value)
        break;
      case "1":
        //Level 1
        setPriceEngine(15000)
        setValueEngine(value)
        break;
      case "2":
        //Level 2
        setPriceEngine(21000)
        setValueEngine(value)
        break;
      case "3":
        //Level 3
        setPriceEngine(28000)
        setValueEngine(value)
        break;
      case "4":
        //Level 4
        setPriceEngine(37000)
        setValueEngine(value)
    }
  }

  function selectionBrake(value: string) {
    switch (value) {
      case "0":
        //Level 0
        setPriceBrake(0)
        setValueBrake(value)
        break;
      case "1":
        //Level 1
        setPriceBrake(15000)
        setValueBrake(value)
        break;
      case "2":
        //Level 2
        setPriceBrake(21000)
        setValueBrake(value)
        break;
      case "3":
        //Level 3
        setPriceBrake(28000)
        setValueBrake(value)
        break;
      case "4":
        //Level 4
        setPriceBrake(36000)
        setValueBrake(value)
    }
  }

  function selectionShield(value: string) {
    switch (value) {
      case "0":
        //Level 0
        setPriceShield(0)
        setValueShield(value)
        break;
      case "1":
        //Level 1
        setPriceShield(28000)
        setValueShield(value)
        break;
      case "2":
        //Level 2
        setPriceShield(43000)
        setValueShield(value)
        break;
      case "3":
        //Level 3
        setPriceShield(58000)
        setValueShield(value)
        break;
      case "4":
        //Level 4
        setPriceShield(73000)
        setValueShield(value)
        break;
      case "5":
        //Level 4
        setPriceShield(88000)
        setValueShield(value)
    }
  }

  function selectionTurbo(value: string) {
    switch (value) {
      case "0":
        //Sem Turbo
        setPriceTurbo(0)
        setValueTurbo(value)
        break;
      case "1":
        //Com Turbo
        setPriceTurbo(15000)
        setValueTurbo(value)
    }
  }


  return (

    <ScrollView w="100%">
      <Center w="full" bg="black" safeArea>

        {/* TOTAL KITS AND PNEUS SELLED */}
        <HStack minW="300" w="90%" my={5} p={5} bg="gray.900" rounded="2xl">
          <Center height="130" m={4} flex={.5}>
            <Text fontSize="100" fontFamily="inter" color="white" w="full" textAlign="center" bold>{selledKits}</Text>
            <Text fontSize="30" fontFamily="inter" color="gray.400" w="full" textAlign="center">KITS</Text>
          </Center>
          <Center height="130" m={4} flex={.5}>
            <Text fontSize="100" fontFamily="inter" color="white" w="full" textAlign="center" bold >{selledPneus}</Text>
            <Text fontSize="30" fontFamily="inter" color="gray.400" w="full" textAlign="center">PNEUS</Text>
          </Center>
        </HStack>

        {/* KITS AND PNEUS TO SELL */}
        <HStack minW="300" w="90%" my={5}>
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

        {/* SELECTS FROM PERFORMANCE */}
        <VStack space={5} width="90%">
          {/* FULL TUNING */}
          <Center>
            <Text fontFamily="inter" fontSize={24} color="white" width="95%">Full Tuning</Text>
            <Select
              selectedValue={valueFullTuning}
              minW="100%"
              mt={1}
              h={12}
              rounded="xl"
              color="white"
              borderColor="gray.700"
              fontSize={20}
              placeholderTextColor="gray.400"
              accessibilityLabel="Selecione uma opção de tunagem"
              placeholder="Selecione uma opção"
              onValueChange={itemValue => selectionFullTuning(itemValue)}
              _selectedItem={{
                bg: "green.400",
                rounded: 15,
              }}
            >
              <Select.Item _text={{ minW: "100%", fontSize: 20, fontFamily: "inter", fontWeight: 700 }} label="Sem Full Tuning" value="0" />
              <Select.Item _text={{ minW: "100%", fontSize: 20, fontFamily: "inter", fontWeight: 700 }} label="LV3 - Sem Blindagem" value="1" />
              <Select.Item _text={{ minW: "100%", fontSize: 20, fontFamily: "inter", fontWeight: 700 }} label="LV3 - Com Blindagem" value="2" />
              <Select.Item _text={{ minW: "100%", fontSize: 20, fontFamily: "inter", fontWeight: 700 }} label="LV4 - Sem Blindagem" value="3" />
              <Select.Item _text={{ minW: "100%", fontSize: 20, fontFamily: "inter", fontWeight: 700 }} label="LV4 - Com Blindagem" value="4" />
            </Select>
          </Center>

          {/* TRANSMISSION */}
          <Center>
            <Text fontFamily="inter" fontSize={24} color="white" width="95%">Transmissão</Text>
            <Select
              selectedValue={valueTransmission}
              minW="100%"
              mt={1}
              h={12}
              rounded="xl"
              color="white"
              borderColor="gray.700"
              fontSize={20}
              placeholderTextColor="gray.400"
              accessibilityLabel="Selecione uma opção de tunagem"
              placeholder="Selecione uma opção"
              onValueChange={itemValue => selectionTransmission(itemValue)}
              _selectedItem={{
                bg: "green.400",
                rounded: 15
              }}
              isDisabled={priceFullTuning != 0 ? true : false}
            >
              <Select.Item _text={{ minW: "100%", fontSize: 20, fontFamily: "inter", fontWeight: 700 }} label="Nível 0" value="0" />
              <Select.Item _text={{ minW: "100%", fontSize: 20, fontFamily: "inter", fontWeight: 700 }} label="Nível 1" value="1" />
              <Select.Item _text={{ minW: "100%", fontSize: 20, fontFamily: "inter", fontWeight: 700 }} label="Nível 2" value="2" />
              <Select.Item _text={{ minW: "100%", fontSize: 20, fontFamily: "inter", fontWeight: 700 }} label="Nível 3" value="3" />
              <Select.Item _text={{ minW: "100%", fontSize: 20, fontFamily: "inter", fontWeight: 700 }} label="Nível 4" value="4" />
            </Select>
          </Center>

          {/* SUSPENSION */}
          <Center>
            <Text fontFamily="inter" fontSize={24} color="white" width="95%">Suspensão</Text>
            <Select
              selectedValue={valueSuspension}
              minW="100%"
              mt={1}
              h={12}
              rounded="xl"
              color="white"
              borderColor="gray.700"
              fontSize={20}
              placeholderTextColor="gray.400"
              accessibilityLabel="Selecione uma opção de tunagem"
              placeholder="Selecione uma opção"
              onValueChange={itemValue => selectionSuspension(itemValue)}
              _selectedItem={{
                bg: "green.400",
                rounded: 15
              }}
              isDisabled={priceFullTuning != 0 ? true : false}
            >
              <Select.Item _text={{ minW: "100%", fontSize: 20, fontFamily: "inter", fontWeight: 700 }} label="Nível 0" value="0" />
              <Select.Item _text={{ minW: "100%", fontSize: 20, fontFamily: "inter", fontWeight: 700 }} label="Nível 1" value="1" />
              <Select.Item _text={{ minW: "100%", fontSize: 20, fontFamily: "inter", fontWeight: 700 }} label="Nível 2" value="2" />
              <Select.Item _text={{ minW: "100%", fontSize: 20, fontFamily: "inter", fontWeight: 700 }} label="Nível 3" value="3" />
              <Select.Item _text={{ minW: "100%", fontSize: 20, fontFamily: "inter", fontWeight: 700 }} label="Nível 4" value="4" />
            </Select>
          </Center>

          {/* ENGINE */}
          <Center>
            <Text fontFamily="inter" fontSize={24} color="white" width="95%">Motor</Text>
            <Select
              selectedValue={valueEngine}
              minW="100%"
              mt={1}
              h={12}
              rounded="xl"
              color="white"
              borderColor="gray.700"
              fontSize={20}
              placeholderTextColor="gray.400"
              accessibilityLabel="Selecione uma opção de tunagem"
              placeholder="Selecione uma opção"
              onValueChange={itemValue => selectionEngine(itemValue)}
              _selectedItem={{
                bg: "green.400",
                rounded: 15
              }}
              isDisabled={priceFullTuning != 0 ? true : false}
            >
              <Select.Item _text={{ minW: "100%", fontSize: 20, fontFamily: "inter", fontWeight: 700 }} label="Nível 0" value="0" />
              <Select.Item _text={{ minW: "100%", fontSize: 20, fontFamily: "inter", fontWeight: 700 }} label="Nível 1" value="1" />
              <Select.Item _text={{ minW: "100%", fontSize: 20, fontFamily: "inter", fontWeight: 700 }} label="Nível 2" value="2" />
              <Select.Item _text={{ minW: "100%", fontSize: 20, fontFamily: "inter", fontWeight: 700 }} label="Nível 3" value="3" />
              <Select.Item _text={{ minW: "100%", fontSize: 20, fontFamily: "inter", fontWeight: 700 }} label="Nível 4" value="4" />
            </Select>
          </Center>

          {/* BRAKE */}
          <Center>
            <Text fontFamily="inter" fontSize={24} color="white" width="95%">Freio</Text>
            <Select
              selectedValue={valueBrake}
              minW="100%"
              mt={1}
              h={12}
              rounded="xl"
              color="white"
              borderColor="gray.700"
              fontSize={20}
              placeholderTextColor="gray.400"
              accessibilityLabel="Selecione uma opção de tunagem"
              placeholder="Selecione uma opção"
              onValueChange={itemValue => selectionBrake(itemValue)}
              _selectedItem={{
                bg: "green.400",
                rounded: 15
              }}
              isDisabled={priceFullTuning != 0 ? true : false}
            >
              <Select.Item _text={{ minW: "100%", fontSize: 20, fontFamily: "inter", fontWeight: 700 }} label="Nível 0" value="0" />
              <Select.Item _text={{ minW: "100%", fontSize: 20, fontFamily: "inter", fontWeight: 700 }} label="Nível 1" value="1" />
              <Select.Item _text={{ minW: "100%", fontSize: 20, fontFamily: "inter", fontWeight: 700 }} label="Nível 2" value="2" />
              <Select.Item _text={{ minW: "100%", fontSize: 20, fontFamily: "inter", fontWeight: 700 }} label="Nível 3" value="3" />
              <Select.Item _text={{ minW: "100%", fontSize: 20, fontFamily: "inter", fontWeight: 700 }} label="Nível 4" value="4" />
            </Select>
          </Center>

          {/* SHIELD */}
          <Center>
            <Text fontFamily="inter" fontSize={24} color="white" width="95%">Blindagem</Text>
            <Select
              selectedValue={valueShield}
              minW="100%"
              mt={1}
              h={12}
              rounded="xl"
              color="white"
              borderColor="gray.700"
              fontSize={20}
              placeholderTextColor="gray.400"
              accessibilityLabel="Selecione uma opção de tunagem"
              placeholder="Selecione uma opção"
              onValueChange={itemValue => selectionShield(itemValue)}
              _selectedItem={{
                bg: "green.400",
                rounded: 15
              }}
              isDisabled={priceFullTuning != 0 ? true : false}
            >
              <Select.Item _text={{ minW: "100%", fontSize: 20, fontFamily: "inter", fontWeight: 700 }} label="Nível 0" value="0" />
              <Select.Item _text={{ minW: "100%", fontSize: 20, fontFamily: "inter", fontWeight: 700 }} label="Nível 1" value="1" />
              <Select.Item _text={{ minW: "100%", fontSize: 20, fontFamily: "inter", fontWeight: 700 }} label="Nível 2" value="2" />
              <Select.Item _text={{ minW: "100%", fontSize: 20, fontFamily: "inter", fontWeight: 700 }} label="Nível 3" value="3" />
              <Select.Item _text={{ minW: "100%", fontSize: 20, fontFamily: "inter", fontWeight: 700 }} label="Nível 4" value="4" />
              <Select.Item _text={{ minW: "100%", fontSize: 20, fontFamily: "inter", fontWeight: 700 }} label="Nível 5" value="5" />
            </Select>
          </Center>

          {/* TURBO */}
          <Center>
            <Text fontFamily="inter" fontSize={24} color="white" width="95%">Turbo</Text>
            <Select
              selectedValue={valueTurbo}
              minW="100%"
              mt={1}
              h={12}
              rounded="xl"
              color="white"
              borderColor="gray.700"
              fontSize={20}
              placeholderTextColor="gray.400"
              accessibilityLabel="Selecione uma opção de tunagem"
              placeholder="Selecione uma opção"
              onValueChange={itemValue => selectionTurbo(itemValue)}
              _selectedItem={{
                bg: "green.400",
                rounded: 15
              }}
              isDisabled={priceFullTuning != 0 ? true : false}
            >
              <Select.Item _text={{ minW: "100%", fontSize: 20, fontFamily: "inter", fontWeight: 700 }} label="Não" value="0" />
              <Select.Item _text={{ minW: "100%", fontSize: 20, fontFamily: "inter", fontWeight: 700 }} label="Sim" value="1" />
            </Select>
          </Center>

        </VStack >

        {/* <TotalContainer>
          <TotalValueText>$  <TextValue>{totalPrice}</TextValue></TotalValueText>
          <FinishButton onPress={onFinished}><TextFinish>FINALIZAR</TextFinish></FinishButton>
        </TotalContainer> */}
      </Center >
    </ScrollView>
  );
}

