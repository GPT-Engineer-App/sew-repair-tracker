export const fetchMachines = async () => {
  const response = await fetch("/api/machines");
  return response.json();
};

export const saveCustomerAndMachine = async (customer, machine) => {
  const response = await fetch("/api/checkin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ customer, machine }),
  });
  return response.json();
};

export const allocateMachineToTech = async (machineId, techId) => {
  const response = await fetch(`/api/machines/${machineId}/allocate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ techId }),
  });
  return response.json();
};
