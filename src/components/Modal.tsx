import { useState } from "react";
import { useDisclosure } from '@mantine/hooks';
import {
  Modal,
  TextInput,
  NumberInput,
  Select,
  Button,
  Stack,
} from "@mantine/core";

type AddExpenseModalProps = {
  opened: boolean;
  onClose: () => void;
  onAdd: (
    name: string, 
    amount: number | string, 
    category: string
  ) => void;
};

export default function AddExpenseModal({
  opened,
  onClose,
  onAdd,
}: AddExpenseModalProps) {
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<string | number>(0);
  const [category, setCategory] = useState<string | null>(null);

 
 

  const handleSubmit = () => {
    if(!name.trim() || amount===0 || category===null)return;
    onAdd(name,amount,category);
    setName("");
    setAmount(0);
    setCategory(null);
    onClose();
  };

  // หากต้องการแปง type string เป็น type number สามารถดูตัวอย่างนี้ได้
  let val_number: number = Number("500.0");
  console.log(val_number + 100); // 600.0

  return (
    <Modal opened={opened} onClose={onClose} title="Add Expense">
      <Stack>
        <TextInput
      label="Expense Name"
      withAsterisk
      description="Expense Name"
      error={!name.trim() && "Expense Name is required"}
      placeholder="E.g.,Coca-Cola"
      value = {name}
      onChange={(e)=>setName(e.currentTarget.value)}
    />
    <NumberInput
      label="Amount"
      withAsterisk
      description="Amount"
      error={amount===0 && "Expense Name is required"}
      placeholder="0"
      value = {amount}
      onChange={(e)=>setAmount(e)}
      min={0}
    />
    <Select
      label="Category"
      description="Category"
      withAsterisk
      placeholder="Select Category"
      error={category===null && "Category is required"}
      data={['Food', 'Transport', 'Entertainment']}
      onChange={(e)=>setCategory(e)}
    />
     <Button onClick={handleSubmit}>Submit</Button>
      </Stack>
    </Modal>
  );
}
