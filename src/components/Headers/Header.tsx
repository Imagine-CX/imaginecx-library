export interface IHeader {
    text: string;
    variant: string;
  }

export const Header = ({ text, variant }: IHeader ) => {
  console.log(variant)
  return (
    <>
      <span className={`${ variant }`} >{ text }</span>
    </>
  )
}
