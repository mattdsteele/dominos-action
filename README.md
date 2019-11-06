# Domino's 🍕 as a GitHub Action

When triggered, will order a pizza for delivery using the [dominos](https://github.com/RIAEvangelist/node-dominos-pizza-api) module

## Usage

```yml
steps:
  - name: pizza
    uses: mattdsteele/dominos-action@master
    with:
      github-token: ${{ secrets.GITHUB_TOKEN }}
      address: ${{ secrets.ADDRESS }}
      order-type: ${{ secrets.ORDER_TYPE }}
      email: ${{ secrets.EMAIL }}
      phone: ${{ secrets.PHONE }}
      first-name: ${{ secrets.FIRST_NAME }}
      last-name: ${{ secrets.LAST_NAME }}
      card-number: ${{ secrets.CARD_NUMBER }}
      expiration: ${{ secrets.EXPIRATION }}
      security-code: ${{ secrets.SECURITY_CODE }}
      card-postal-code: ${{ secrets.CARD_POSTAL_CODE }}
      active: ${{ secrets.ACTIVE }}
```

## Parameters

See [action.yml](./action.yml) for params and details
