import React from "react";
import { Text, View } from "react-native";

interface ExpensesSummaryProps {
  expenses: {
    amount: number;
  }[];
  periodName: string;
}

const ExpensesSummary = ({ expenses, periodName }: ExpensesSummaryProps) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;
