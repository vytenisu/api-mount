import {apiMountFactory, mountApi} from '../node'

describe('Aggregated api-mount', () => {
  it('works', async () => {
    const RETURN_VALUE = 'hello'

    const serverApi = {
      test: () => RETURN_VALUE,
    }

    const ApiMount = apiMountFactory()
    ApiMount.exposeApi(serverApi)

    const clientApi = mountApi({baseUrl: 'http://localhost:3000'})

    expect(await clientApi.test()).toBe(RETURN_VALUE)
  })
})
