// export const Base_url ='https://banking-be-5zt5.onrender.com/api/transaction/manager'
// export const ManagerWithdrawList_url =`${Base_url}`
// https://banking-be-5zt5.onrender.com/api/manager/login


export const BASE_URL = "https://banking-be-5zt5.onrender.com/api";

export const ManagerLogin_url =`${BASE_URL}/manager/login`

export const apiWithdrawalUrl = (managerId) =>`${BASE_URL}/transaction/manager/${managerId}?transactionType=withdrawal`;