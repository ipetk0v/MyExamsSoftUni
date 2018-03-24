class PaymentManager{
    constructor(title){
        this.title = title
        this._element = this.createElement()
        this.store = [{'name': "name", 'category': "category", 'price': "price"}]
    }

    createElement(){
        let table = $('<table>')
        let caption = $('<caption>').text(`${this.title} Payment Manager`)
        // Add Thead
        let thead = `<thead>
                            <tr>
                                <th class="name">Name</th>
                                <th class="category">Category</th>
                                <th class="price">Price</th>
                                <th>Actions</th>
                            </tr>
                    </thead>`
        caption.append(thead)

        // Add TBody
        let tbody = `<tbody class=\"payments\">`
        let element = `<tr>
            <td>Payment's name</td>
            <td>Payment's category</td>
            <td>Payment's price</td>
            <td><button>Delete</button></td>
        // </tr>`
        // tbody.append(element)
        caption.append(tbody)

        // Add Tfood
        let tfood = `<tfoot class="input-data">
                        <tr>
                            <td><input name="name" type="text"></td>
                            <td><input name="category" type="text"></td>
                            <td><input name="price" type="number"></td>
                            <td><button>Add</button></td></tr>
                    </tfoot>`
        caption.append(tfood)
        table.append(caption)
        return table
    }

    add(name,category,price){
        let obj = {}
        obj.name = name
        obj.category = category
        obj.price = price
    }

    render(id){
        $(`#${id}`).append(this._element);
    }
}

module.exports = PaymentManager