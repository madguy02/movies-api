export function dateCheck(from: any, to: any, dateFrom: any, dateTo: any) {

    const constructNewFromDate = new Date(from).getTime()
    const constructNewToDate = new Date(to).getTime()
    const constructCheckFromDate = new Date(dateFrom).getTime()
    const constructCheckToDate = new Date(dateTo).getTime()

    if ( ( constructNewFromDate > constructCheckFromDate && constructCheckToDate > constructNewToDate === true)
        || (constructCheckFromDate >= constructNewFromDate && constructCheckToDate <= constructNewToDate) ) {
        return false
    }


    if (constructCheckFromDate >= constructNewFromDate && constructCheckFromDate <= constructNewToDate) {
        return false
    }

    if (constructCheckToDate >= constructNewFromDate && constructCheckToDate <= constructNewToDate) {
        return false
    }

    return true

}