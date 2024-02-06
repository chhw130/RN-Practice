import React from "react";
import { FlatList, Text } from "react-native";
import { ExpensesType } from "./ExpensesOutput";
import ExpenseItem from "./ExpenseItem";

interface ExpensesListProps {
  expensesList: ExpensesType[];
}

const ExpensesList = ({ expensesList }: ExpensesListProps) => {
  const renderExpenseItem = (itemData: any) => {
    return <ExpenseItem {...itemData.item} />;
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
