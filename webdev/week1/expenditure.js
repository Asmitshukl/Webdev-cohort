let obj1=[{
    id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
},{
    id: 2,
		timestamp: 1656076800000,
		price: 15,
		category: 'Food',
		itemName: 'chowein',
},{
    id: 3,
		timestamp: 1656076800000,
		price: 20,
		category: 'Food',
		itemName: 'rice',
},{
    id: 4,
		timestamp: 1656076800000,
		price: 25,
		category: 'Food',
		itemName: 'burger',
}]
function calculateTotalSpentByCategory(transactions) {
  let obj=[];
  for(let i=0;i<transactions.length;i++){
    let t = {itemname: transactions[i].itemName,price: transactions[i].price};
    obj.push(t);
  }
  return obj;
}
console.log(calculateTotalSpentByCategory(obj1));
