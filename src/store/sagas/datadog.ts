import { getContext, spawn, takeEvery } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga'
import { RumGlobal } from '@datadog/browser-rum'
import { FAILURE, GlobalAction } from '../actions'
import { Location } from 'react-router'

interface ActionForRUM extends GlobalAction {
  payload: Location
}

export function* fetchDataSaga(action: GlobalAction): SagaIterator {
  const datadogRum = (yield getContext('datadogRum')) as RumGlobal;
  console.log('[RUM] Action received:', datadogRum)
  try {
    if (action.type === '@@route_navigation') {
      const actionForRUM = action as ActionForRUM
      datadogRum.startView({
        name: actionForRUM.payload.pathname,
        service: `webshop`,
        version: `1.0.0`,
        // context: {
        //   meta: action.meta?.o11y
        // },
      })

    } else if (action.type === FAILURE) {
      datadogRum.addError(action.payload as Error, {
        context: action.meta,
      })
      console.error('[RUM] Error reported:', action.payload)
    } else {

      if (action.meta?.event === 'datadog') {
        datadogRum.addAction(action.type, {
          ...action.payload,
        })
      }
      
    }
  } catch (err) {
    datadogRum.addError(new Error('Erro na saga de RUM'))
    console.error('[RUM] Error in RUM saga:', err)
  }
}

export function* rumSaga(): SagaIterator {
  yield takeEvery('*', fetchDataSaga)
}

export function* rootSaga(): SagaIterator {
  yield spawn(rumSaga)
}