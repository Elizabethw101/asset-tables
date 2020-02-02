/* eslint-disable no-undef */
import {useTableSort }from "./useTableSort";
import { getPricing } from "../../api/pricing";


describe("it tests the use sort hook", () => {
  const prices = getPricing();

  it('sorts by price', () => {
    const {result} = renderHook(() => useTableSort(prices))
    expect(result.current[1][0]).toEqual( {"assetClass": "Credit", "price": 3150.67, "ticker": "ALPHA"})
    actHook(() => {
      result.current[0]( { label: 'Price', dataType: 'currency', sortType: 'number', dataField: 'price' })
    })
    expect(result.current[1][0]).toEqual( {"assetClass": "Equities", "price": 3791.37, "ticker": "BETA"})
  })

  it('sorts by Asset Class', () => {
    const {result} = renderHook(() => useTableSort(prices))
    expect(result.current[1][0]).toEqual( {"assetClass": "Credit", "price": 3150.67, "ticker": "ALPHA"})
    actHook(() => {
      result.current[0]({ label: 'Asset Class', dataType: 'asset', sortType: 'assetClass', 'dataField': 'assetClass' })
    })
    expect(result.current[1][0]).toEqual( {"assetClass": "Macro", "price": 2082.71, "ticker": "TAU"})
  })

  it('sorts by alphabetical by ticker', () => {
    const {result} = renderHook(() => useTableSort(prices))
    expect(result.current[1][0]).toEqual( {"assetClass": "Credit", "price": 3150.67, "ticker": "ALPHA"})
    actHook(() => {
      result.current[0]({label: 'Ticker', dataType: 'text', sortType: 'alpha', dataField: 'ticker' })
    })
    expect(result.current[1][0]).toEqual( {"assetClass": "Credit", "price": 3150.67, "ticker": "ALPHA"})
  })
})
