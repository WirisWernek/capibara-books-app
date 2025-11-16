# 📅 Formatação de Datas - Firebase

## Problema Resolvido

O Firebase retorna datas no formato brasileiro completo:
```
"2 de novembro de 2025 às 16:52:34 UTC-3"
```

## Solução: DateFormatter

Criamos uma classe utilitária que converte e formata essas datas de diferentes formas.

## 🎯 Métodos Disponíveis

### 1. `parseFirebaseDate(firebaseDate: string)`
Converte a data do Firebase em um objeto Date nativo.

### 2. `toSimpleDate(date)`
Formato: `02/11/2025`
```typescript
DateFormatter.toSimpleDate(item.dateRead) // "02/11/2025"
```

### 3. `toShortDate(date)`
Formato: `2 de Nov`
```typescript
DateFormatter.toShortDate(item.dateRead) // "2 de Nov"
```

### 4. `toFullDate(date)`
Formato: `2 de novembro de 2025`
```typescript
DateFormatter.toFullDate(item.dateRead) // "2 de novembro de 2025"
```

### 5. `toDateTimeShort(date)`
Formato: `02/11/2025 16:52`
```typescript
DateFormatter.toDateTimeShort(item.dateRead) // "02/11/2025 16:52"
```

### 6. `toRelativeDate(date)`
Formato: `Há 2 dias`, `Ontem`, `Hoje`
```typescript
DateFormatter.toRelativeDate(item.dateRead) // "Há 3 dias"
```

## 💡 Exemplos de Uso no Modal Histórico

### Layout Atual (Implementado)
```tsx
renderItem={({ item }) => (
    <View className='flex-row justify-between items-center py-2 border-b border-gray-200'>
        <View>
            <Text className='text-sm font-medium'>
                {item.percentageRead}% lido
            </Text>
            <Text className='text-xs text-gray-600'>
                {DateFormatter.toRelativeDate(item.dateRead)}
            </Text>
        </View>
        <Text className='text-xs text-gray-500'>
            {DateFormatter.toSimpleDate(item.dateRead)}
        </Text>
    </View>
)}
```

### Alternativas Simples

#### Opção 1: Apenas data simples
```tsx
<Text>{item.percentageRead}% - {DateFormatter.toSimpleDate(item.dateRead)}</Text>
// Resultado: "85% - 02/11/2025"
```

#### Opção 2: Com data relativa
```tsx
<Text>{item.percentageRead}% - {DateFormatter.toRelativeDate(item.dateRead)}</Text>
// Resultado: "85% - Há 3 dias"
```

#### Opção 3: Data completa
```tsx
<Text>{item.percentageRead}% em {DateFormatter.toFullDate(item.dateRead)}</Text>
// Resultado: "85% em 2 de novembro de 2025"
```

## 🚀 Como Usar

1. **Importe o formatador:**
```typescript
import { DateFormatter } from '@/utils/dateFormatter'
```

2. **Use nos seus componentes:**
```typescript
// Para uma data do Firebase
const dataFormatada = DateFormatter.toSimpleDate(item.dateRead)

// Para um objeto Date normal
const dataFormatada = DateFormatter.toSimpleDate(new Date())
```

## ⚠️ Tratamento de Erros

O formatador trata automaticamente:
- Datas inválidas → retorna "Data inválida"
- Erros de parsing → retorna "Data inválida"
- Strings vazias ou null → retorna "Data inválida"

## 🎨 Personalização

Para adicionar novos formatos, edite a classe `DateFormatter` em:
```
/utils/dateFormatter.ts
```