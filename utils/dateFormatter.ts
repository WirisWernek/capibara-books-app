/**
 * Utilitários para formatação de datas
 */

export class DateFormatter {
  /**
   * Converte uma data do Firebase para Date object
   * Funciona com vários formatos: timestamps, ISO strings, e formato brasileiro
   */
  static parseFirebaseDate(firebaseDate: string | number | Date): Date | null {
    try {
      // Se já é um Date, retorna
      if (firebaseDate instanceof Date) {
        return firebaseDate
      }

      // Se é um timestamp (número)
      if (typeof firebaseDate === 'number') {
        return new Date(firebaseDate)
      }

      // Se é string vazia ou null
      if (!firebaseDate || firebaseDate.toString().trim() === '') {
        return null
      }

      const dateString = firebaseDate.toString().trim()

      // Tenta primeiro com new Date() (funciona com ISO strings e formatos padrão)
      const directParse = new Date(dateString)
      if (!isNaN(directParse.getTime())) {
        return directParse
      }

      // Se não funcionou, tenta parsing manual do formato brasileiro
      // "2 de novembro de 2025 às 16:52:34 UTC-3"
      const monthMap: { [key: string]: string } = {
        'janeiro': '01', 'fevereiro': '02', 'março': '03', 'abril': '04',
        'maio': '05', 'junho': '06', 'julho': '07', 'agosto': '08',
        'setembro': '09', 'outubro': '10', 'novembro': '11', 'dezembro': '12'
      }

      // Regex para capturar partes da data brasileira
      const brazilianRegex = /(\d{1,2})\s+de\s+(\w+)\s+de\s+(\d{4})(?:\s+às\s+(\d{1,2}):(\d{2}):(\d{2}))?/i
      const match = dateString.match(brazilianRegex)

      if (match) {
        const [, day, monthName, year, hour = '00', minute = '00', second = '00'] = match
        const month = monthMap[monthName.toLowerCase()]
        
        if (month) {
          const isoString = `${year}-${month}-${day.padStart(2, '0')}T${hour.padStart(2, '0')}:${minute}:${second}`
          const parsedDate = new Date(isoString)
          
          if (!isNaN(parsedDate.getTime())) {
            return parsedDate
          }
        }
      }

      console.warn('Não foi possível fazer parse da data:', dateString)
      return null
    } catch (error) {
      console.error('Erro ao converter data:', error)
      return null
    }
  }

  /**
   * Formata data para exibição simples (dd/mm/aaaa)
   */
  static toSimpleDate(date: Date | string): string {
    try {
      const dateObj = typeof date === 'string' ? this.parseFirebaseDate(date) : date
      if (!dateObj) return 'Data inválida'

      return dateObj.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      })
    } catch (error) {
      return 'Data inválida'
    }
  }

  /**
   * Formata data para exibição com dia e mês (ex: 2 de Nov)
   */
  static toShortDate(date: Date | string): string {
    try {
      const dateObj = typeof date === 'string' ? this.parseFirebaseDate(date) : date
      if (!dateObj) return 'Data inválida'

      return dateObj.toLocaleDateString('pt-BR', {
        day: 'numeric',
        month: 'short'
      })
    } catch (error) {
      return 'Data inválida'
    }
  }

  /**
   * Formata data completa (ex: 2 de novembro de 2025)
   */
  static toFullDate(date: Date | string): string {
    try {
      const dateObj = typeof date === 'string' ? this.parseFirebaseDate(date) : date
      if (!dateObj) return 'Data inválida'

      return dateObj.toLocaleDateString('pt-BR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    } catch (error) {
      return 'Data inválida'
    }
  }

  /**
   * Formata data com hora (ex: 02/11/2025 16:52)
   */
  static toDateTimeShort(date: Date | string): string {
    try {
      const dateObj = typeof date === 'string' ? this.parseFirebaseDate(date) : date
      if (!dateObj) return 'Data inválida'

      return dateObj.toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    } catch (error) {
      return 'Data inválida'
    }
  }

  /**
   * Formata data relativa (ex: "há 2 dias", "ontem", "hoje")
   */
  static toRelativeDate(date: Date | string): string {
    try {
      const dateObj = typeof date === 'string' ? this.parseFirebaseDate(date) : date
      if (!dateObj) return 'Data inválida'

      const now = new Date()
      const diffTime = now.getTime() - dateObj.getTime()
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

      if (diffDays === 0) {
        return 'Hoje'
      } else if (diffDays === 1) {
        return 'Ontem'
      } else if (diffDays < 7) {
        return `Há ${diffDays} dias`
      } else if (diffDays < 30) {
        const weeks = Math.floor(diffDays / 7)
        return `Há ${weeks} semana${weeks > 1 ? 's' : ''}`
      } else if (diffDays < 365) {
        const months = Math.floor(diffDays / 30)
        return `Há ${months} mês${months > 1 ? 'es' : ''}`
      } else {
        const years = Math.floor(diffDays / 365)
        return `Há ${years} ano${years > 1 ? 's' : ''}`
      }
    } catch (error) {
      return 'Data inválida'
    }
  }
}