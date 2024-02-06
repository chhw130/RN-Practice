import React from "react";
import { FlatList, Text } from "react-native";
import { ExpensesType } from "./ExpensesOutput";

interface ExpensesListProps {
  expensesList: ExpensesType[];
}

const ExpensesList = ({ expensesList }: ExpensesListProps) => {
  const renderExpenseItem = (itemData: any) => {
    return <Text>{itemData.item.description}</Text>;
  };

  return (
    <>
      <FlatList
        data={expensesList}
        renderItem={renderExpenseItem}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

export default ExpensesList;
