window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  'event': 'view_item',
  'ecommerce': {
    'currency': '{{ shop.currency }}',
    'value': '{{ product.price | money_without_currency }}',
    'items': [
      {
        'item_id': '{{ product.id }}',
        'item_name': '{{ product.title | escape }}',
        'affiliation': 'My Shopify Store',
        'index': 0,
        'item_brand': '{{ product.vendor | escape }}',
        'item_category': '{{ product.type | escape }}',
        'item_list_id': 'product_page',
        'item_list_name': 'Product Page',
        'item_variant': '{{ product.selected_or_first_available_variant.title | escape }}',
        'price': '{{ product.price | money_without_currency }}',
        'quantity': 1 
      }
    ]
  }
});

