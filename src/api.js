import http from "node:http";

const ua = 'LocalCacheCheckerNd/1.0.0'

const agent = new http.Agent({
    keepAlive: 10000
})

export async function fetchFranchises () {
    const url = new URL('/api/v1/anime/franchises', 'https://anilibria.top')

    return await fetch(url, {
        method: 'GET',
        keepalive: true,
        headers: {
            'user-agent': ua
        }
    })
        .then(x => x.json())
}

export async function fetchFranchise(id) {
    const url = new URL('/api/v1/anime/franchises/' + id, 'https://anilibria.top')

    return await fetch(url, {
        method: 'GET',
        keepalive: true,
        headers: {
            'user-agent': ua
        }
    })
        .then(x => x.json())
}

export async function fetchCatalog (page) {
    page = page ? page : 1

    const url = new URL('/api/v1/anime/catalog/releases', 'https://anilibria.top')

    url.searchParams.set('page', page)
    url.searchParams.set('limit', '50')
    url.searchParams.set('f[sorting]', 'FRESH_AT_DESC')

    return await fetch(url, {
        method: 'POST',
        keepalive: true,
        headers: {
            'user-agent': ua
        }
    })
        .then(x => x.json())
}

export async function fetchReleases (ids, page) {
    page = page ? page : 1

    const url = new URL('/api/v1/anime/releases/list', 'https://anilibria.top')

    url.searchParams.set('ids', ids.join(','))
    url.searchParams.set('page', page)
    url.searchParams.set('limit', '50')

    return await fetch(url, {
        method: 'GET',
        keepalive: true,
        headers: {
            'user-agent': ua
        }
    })
        .then(x => x.json())
}
