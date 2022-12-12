import React,{useState, useEffect} from 'react'
import "./Skills.css"
import SkillsData from "../../Data/SkillsData.json"
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Skills() {

//     const [progress, setProgress] = useState(10);
//     // const [val, setVal] = useState(0);
//     // let val = 0;

//     // let progress = 0;
//     // const [progress, setProgress] = React.useState(0);

// const hover = (val) =>{
    
//      setInterval(() => {
//           setProgress((prevProgress) => (prevProgress >= val ? 0 : prevProgress + 1));
//         }, 900);
// }


    return (
        <main>
            <section>
                <h1>Skills.</h1>

                <div className='flex justify-between items-center flex-row w-[100%] flex-wrap'>
                    {
                        SkillsData.map((data) => {
                            return (
                                <>
                                    <div className="flipbox flex justify-between items-center">
                                        <div className="flip-card-inner flex justify-around flex-col items-center m-4">
                                            <div className="flip-card-back flex justify-around flex-col items-center m-4 w-[130px] h-[110px] bg-gray-200 rounded-[10px] shadow-md ">
                                                <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                                                    <CircularProgress variant="determinate" value={data.progress} className="loader" />
                                                    <Box
                                                        sx={{
                                                            top: 0,
                                                            left: 0,
                                                            bottom: 0,
                                                            right: 0,
                                                            position: 'absolute',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }}
                                                    >
                                                        <Typography variant="caption" component="div" color="black" fontSize={"14px"}>
                                                            {`${Math.round(data.progress)}%`}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </div>
                                            <div className="flip-card-front flex flex justify-around flex-col items-center m-4 w-[130px] h-[110px] bg-gray-200 rounded-[10px] shadow-md ">
                                                <img src={data.icon} className="w-[45px] h-[45px] mr-2" alt="" />
                                                <div className='textFont text-[12px] md:text-[14px] text-left'>
                                                    {data.name}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </section>
        </main>
    )
}
