/* eslint-disable brace-style */
/* eslint-disable max-len */
const tickets = [
  { type: "Regular", price: 5 },
  { type: "VIP", price: 20 },
  { type: "Premium", price: 50 },
];

function calculateTotalPrice(quantity, ticketType) {
  const selectedTicket = tickets.filter(
    (ticket) => ticket.type === ticketType
  )[0];
  return quantity * selectedTicket.price;
}

document.getElementById("ticketForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const quantity = parseInt(document.getElementById("tickets").value);
  const ticketType = document.getElementById("ticketType").value;

  const totalPrice = calculateTotalPrice(quantity, ticketType);

  document.getElementById("result").innerHTML = `
          <p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Ticket Type: ${ticketType}</p>
          <p>Quantity: ${quantity}</p>
          <p>Total Price: $${totalPrice}</p>  `;
});
