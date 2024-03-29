import { Button, Text, TextArea, TextInput } from '@ignite-ui/react'
import { ConfirmForm, FormActions, FormHeader } from './styles'
import { CalendarBlank, Clock } from 'phosphor-react'

export function ConfirmStep() {
  function handleConfirmScheduling() {}

  return (
    <ConfirmForm as="form" onSubmit={handleConfirmScheduling}>
      <FormHeader>
        <Text>
          <CalendarBlank />
          29 de março de 2024
        </Text>
        <Text>
          <Clock />
          20:00
        </Text>
      </FormHeader>

      <label>
        <Text size="sm">Nome completo</Text>
        <TextInput crossOrigin placeholder="Seu nome" />

        <Text size="sm">Endereço de e-mail</Text>
        <TextInput crossOrigin type="email" placeholder="johndoe@example.com" />

        <Text size="sm">Observações</Text>
        <TextArea />
      </label>

      <FormActions>
        <Button type="button" variant="tertiary">
          Cancelar
        </Button>
        <Button type="submit">Confirmar</Button>
      </FormActions>
    </ConfirmForm>
  )
}
