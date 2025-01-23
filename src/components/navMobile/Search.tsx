type searchProps = {
   className: string
   onFocus?: () => void
   onBlur?: () => void
}

const Search = ({ className, onFocus, onBlur }: searchProps) => {
   return (
      <input
         type="text"
         placeholder="Cari"
         className={className}
         onFocus={onFocus}
         onBlur={onBlur}
      />
   )
}

export default Search