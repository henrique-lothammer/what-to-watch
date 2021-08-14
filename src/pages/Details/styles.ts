import styled from 'styled-components'

import { colors } from 'styles/variables'

interface IContainerProps {
  background: string
}

interface IWatchLaterProps {
  watchLatered: boolean
}

interface IFavoriteProps {
  favorited: boolean
}

export const Cover = styled.div`
  background: url(${(props: IContainerProps) => props.background}) no-repeat
    center center;
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgb(0 0 0 / 71%);
  width: 100%;
  width: 100%;
  height: 300px;
  position: relative;
  margin-bottom: 20px;
`

export const Container = styled.section`
  width: 100%;
  display: flex;
  margin-top: 40px;
  padding-bottom: 5px;
  position: relative;
`

export const Poster = styled.img`
  width: 185px;
  height: 278px;
  background: #ddd;
  border-radius: 4px;
  border: 0;
  outline: 0;
  margin-top: -25px;
`

export const Description = styled.article`
  flex: 1;
  padding: 10px;
`

export const DescriptionItems = styled.ul`
  display: flex;
  padding: 10px 0;
  li {
    margin-right: 18px;
  }
`

export const DescriptionText = styled.div`
  height: 205px;
  padding-top: 10px;
  overflow: auto;
`

export const WatchLaterBtn = styled.button`
  background: ${(props: IWatchLaterProps) =>
    props.watchLatered ? colors.secondaryPressed : colors.secondary};
  font-size: 1.8rem;
  line-height: 2rem;
  padding: 10px 8px;
  border: none;
  border-radius: 3px;
  color: ${(props: IWatchLaterProps) =>
    props.watchLatered ? colors.active : colors.font};
  font-weight: bold;
  margin-right: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  width: 152px;
`

export const FavoriteBtn = styled.button`
  background: ${(props: IFavoriteProps) =>
    props.favorited ? colors.secondaryPressed : colors.secondary};
  font-size: 1.8rem;
  line-height: 2rem;
  padding: 10px 8px;
  border: none;
  border-radius: 3px;
  color: ${(props: IFavoriteProps) =>
    props.favorited ? colors.active : colors.font};
  font-weight: bold;
  margin-right: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  width: 119px;
`

export const ButtonsContainer = styled.div`
  position: absolute;
  bottom: -23px;
  right: 0;
`
export const Video = styled.iframe`
  margin: 10px;
  width: 728px;
  height: 341px;
`
export const Score = styled.div`
  background: ${colors.primary};
  color: ${colors.font};
  position: absolute;
  padding: 5px;
  border-radius: 100%;
  top: 5px;
  right: 5px;
  z-index: 2;
  width: 36px;
  height: 36px;
  text-align: center;
  text-align: center;
  font-size: 1.6rem;
  line-height: 2.6rem;
  box-shadow: 0 0 1em #000;
`
