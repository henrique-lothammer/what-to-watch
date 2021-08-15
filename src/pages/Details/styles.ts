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

export const Warning = styled.h4`
  text-align: center;
  text-align: center;
  padding: 10px;
  font-weight: 500;
`

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

  @media only screen and (max-width: 900px) {
    height: auto;
  }
`

export const Container = styled.section`
  width: 100%;
  display: flex;
  margin-top: 40px;
  padding-bottom: 5px;
  position: relative;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
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
  @media only screen and (max-width: 320px) {
    width: 250px;
    height: 120px;
  }
  @media only screen and (min-width: 321px) and (max-width: 375px) {
    width: 300px;
    height: 140px;
  }
  @media only screen and (min-width: 376px) and (max-width: 425px) {
    width: 336px;
    height: 157px;
  }
  @media only screen and (min-width: 426px) and (max-width: 767px) {
    width: 386px;
    height: 181px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 728px;
    height: 341px;
  }
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
