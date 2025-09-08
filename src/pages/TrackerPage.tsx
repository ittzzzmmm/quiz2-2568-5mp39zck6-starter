import { useState } from "react";
import AddModal from "../components/Modal"
import { Button, Stack, Title, Divider, Container, factory } from "@mantine/core";
import { v4 as uuidv4 } from "uuid";

type Expense = {
  id: string;
  name: string;
  amount: number | string;
  category: string;
};

export default function ExpenseTracker() {
  const [opened, setOpened] = useState(false);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const categories = ["Food", "Transport", "Entertainment"];

  const [foodCount , setFoodCount] = useState(0);
  const [transportCount , setTransportCount] = useState(0);
  const [entertainmentCount , setEntertainmentCount] = useState(0);



  const addExpense=(
    name:string,
    amount:number | string,
    category:string
  )=>{
    const newExpense:Expense ={
      id: uuidv4(),
      name,
      amount,
      category

    };
    setExpenses((prev)=>[...prev,newExpense])
    expenses.map((e)=>{
      if(e.category==="Food"){
     
      }
    })
  }

  return (
    <Container style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <Title order={2} mb="md">
        Expense Tracker
      </Title>
      <Button
      onClick={()=>setOpened(true)}
      >Add Expense Item</Button>
      <AddModal
        opened={opened}
        onClose={()=>setOpened(false)}
        onAdd={(addExpense)}
        >

      </AddModal>
        
      {/* Type additional AddExpenseModal here. */}

      <Divider my="md" />
      {/* Type additional total cost here. */}
      <Title order={4}>Total cost: {expenses.length} Baht</Title>
      <Stack my="sm">{expenses.length!=0 && 
        <Stack>
          Food: {}
        </Stack>
        }</Stack>

      <Divider my="md" />
      {/* Type additional card here. */}
      <Stack>{/* Type additional expense card list here. */}</Stack>
    </Container>
  );
}
