function Paginate(items, page, pageLength) {
    const datas = items
    var pg = page || 1,
        pgSize = pageLength || 3,
        offset = (pg -1 ) * pgSize,
        pagedItems = _.drop(datas,offset).slice(0, pgSize)
    
    return {
        page: pg,
        pageSize: pgSize,
        total: datas.length,
        total_pages: Math.ceil(datas.length / pgSize),
        items: pagedItems
    }
}

module.exports = { Paginate, }