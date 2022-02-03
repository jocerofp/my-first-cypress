
/// <reference types="cypress" />
// TS

import { RouteHandler } from 'cypress/types/net-stubbing'
type Method = 'GET' | 'POST' | 'PUT' | 'PATCH'

export const interceptFactory = (method: Method, pathname: string, requestName: string) => {
    return (routeHandler?: RouteHandler) => {
      cy.intercept(method, pathname, routeHandler).as(requestName)
  
      return () => cy.wait(`@${requestName}`)
    }
  }
  
// użycie w pliku interceptFactory.js