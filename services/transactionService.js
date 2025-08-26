import axios from "axios";
import { apiWithdrawalUrl } from "@/lib/apiRoutes";

export async function getManagerTransactions(managerId) {
  const res = await axios.get(`${apiWithdrawalUrl(managerId)}`  );
  return res.data;
}
