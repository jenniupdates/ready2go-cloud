const application = {
	init: async function () {
		const orders = await this.getOrdersAsync()
		orders.forEach((order) => {
			const {
				orderId,
				merchantName,
        customerName,
				customerAddress,
				status,
			} = order

      const itemElement = this.getOrderItemTemplate(`<div class="badge">${status}</div> #${orderId}`, `
        <label class="font-bold">Destination</label>
        <p class="mb-4">${customerAddress}</p>

        <label class="font-bold">Customer</label>
        <p class="mb-4">${customerName}</p>

        <label class="font-bold">Merchant</label>
        <p>${merchantName}</p>
      `)

      $('#order-list').append(itemElement)
		})
	},

	getOrderItemTemplate: function (title, body) {
		return `
      <div class="card bg-base-100 shadow-md mt-4">
        <div class="card-body">
          <h2 class="card-title">${title}</h2>
          <div>
            ${body}
          </div>

          <div class="card-actions justify-end">
            <button class="btn btn-primary">Accept</button>
          </div>
        </div>
      </div>  
    `
	},

	getOrdersAsync: async function () {
		// TODO: Handle retrieval from endpoint

		return [
			{
				orderId: "order-id-1",
				trackingId: "tracking-id-1",
				merchantId: "merchant-id-1",
				merchantName: "the merchant name",
				customerName: "the customer name",
				customerAddress: "Blk 123, #01-01, ABC Road, 123456",
				sellerId: "seller-id-1",
				sellerName: "the seller name",
				sellerAddress: "Blk 456, #01-01, DEF Road, 123456",
				status: "pending",
			},
			{
				orderId: "order-id-2",
				trackingId: "tracking-id-2",
				merchantId: "merchant-id-2",
				merchantName: "the merchant name",
				customerName: "the customer name",
				customerAddress: "Blk 123, #01-01, ABC Road, 123456",
				sellerId: "seller-id-2",
				sellerName: "the seller name",
				sellerAddress: "Blk 456, #01-01, DEF Road, 123456",
				status: "pending",
			},
			{
				orderId: "order-id-3",
				trackingId: "tracking-id-3",
				merchantId: "merchant-id-3",
				merchantName: "the merchant name",
				customerName: "the customer name",
				customerAddress: "Blk 123, #01-01, ABC Road, 123456",
				sellerId: "seller-id-3",
				sellerName: "the seller name",
				sellerAddress: "Blk 456, #01-01, DEF Road, 123456",
				status: "pending",
			},
		]
	},
}

application.init()
