import { ChangeEvent } from "react";

type searchBoxProps = {
    searchChange: (e:ChangeEvent<HTMLInputElement>) => void
}

const SerachBox = ({ searchChange }: searchBoxProps) => {
        return (
            <div className='pa2'>
                <input className="pa3 ba b--green bg-lightest-blue" 
                type="search" 
                placeholder='Search Robots' 
                onChange={(e) => searchChange(e)}/>
            </div>
        )
}

export default SerachBox;