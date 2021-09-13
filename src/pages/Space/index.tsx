/* eslint-disable jsx-a11y/no-autofocus */
import React, { useCallback, useContext, useEffect, useState } from 'react'
import Card from '../../components/Card'
import Input from '../../components/Input'
import { StarShipsContext } from '../../contexts/StarShipsContext'
import * as Styled from './styles'

export default function Space() {
  const { fetchData, data, loading } = useContext(StarShipsContext)
  const [value, setValue] = useState(0)

  useEffect(() => {
    fetchData()
  }, [])

  const onChangeIput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(Number(e.target.value))
    },
    [value]
  )

  return (
    <Styled.Container>
      {loading ? (
        <Styled.Loading>
          <h3>wait while we map the spaceships...</h3>
        </Styled.Loading>
      ) : (
        <Styled.Content>
          <Styled.ContentHeader>
            <h2>the distance is (MGLT)</h2>
            <Input type="text" placeholder="type here..." autoFocus onChange={onChangeIput} />
          </Styled.ContentHeader>

          <Styled.ContentBody>
            <Styled.Cards>
              {data.map((item) => (
                <Card
                  key={item.name}
                  MGLT={item.MGLT}
                  name={item.name}
                  stops={Math.floor(value / (Number(item.consumables) * Number(item.MGLT)))}
                />
              ))}
            </Styled.Cards>
          </Styled.ContentBody>
        </Styled.Content>
      )}
    </Styled.Container>
  )
}
