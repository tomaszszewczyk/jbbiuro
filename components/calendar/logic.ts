export const months = [
    'Styczeń', 'Luty', 'Marzec', 'Kwiecień',
    'Maj', 'Czerwiec', 'Lipiec', 'Sierpień',
    'Wrzesień', 'Październik', 'Listopad', 'Grudzień'
]
export const days = ['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'Sb', 'Nd']
export const importantDays = [6, 10, 15, 20, 25]

export const getDay = (date: Date) => (date.getDay() + 6) % 7
export const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate()
export const getStartingDay = (year: number, month: number) => getDay(new Date(year, month, 1))
