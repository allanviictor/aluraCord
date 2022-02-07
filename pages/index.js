import { Box, Button, Text, TextField, Image } from '@skynexui/components'
import React from 'react';
import { useRouter } from 'next/router'
import  appConfig  from '../config.json'




function Title(props){
    const Tag = props.tag
    return(
        <>
            <Tag>{props.children}</Tag>

            <style jsx>{`
                h2{
                    color: #fff;
                    font-size: 30px;
                }
            `}</style>
        </>
    );
}



function HomePage() {
    /* var inputUser = 'allan'; */

    let [userInput, setUserInput] = React.useState('allanviictor')
    let [ buttonCursor, setButtonCursor ] = React.useState('pointer')
    let router = useRouter()
    /* let disabledButton = 'pointer' */

    return (
        <>

            <Box styleSheet={{  display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: appConfig.theme.colors.primary['500'],
                backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)',
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',}}>

                <Box as="form" 
                    onSubmit={(event=> {
                        event.preventDefault();
                        router.push('/chat')
                    })}
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%', maxWidth: '700px',
                        borderRadius: '5px', padding: '32px', margin: '16px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        backgroundColor: appConfig.theme.colors.neutrals['700']
                    }}
                >

                    <Box styleSheet={{ display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center', 
                        justifyContent: 'center', width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',}}>

                        <Title tag="h2">Boas vindas de volta!</Title>

                        <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals['300'] }}>
                            {appConfig.name}
                        </Text>

                        <TextField fullWidth value={userInput}
                            onChange={((event) =>{
                                setUserInput(event.target.value)

                                if(event.target.value.length < 2 || event.target.value == ""){
                                    setButtonCursor('not-allowed')
                                }else {
                                    setButtonCursor('pointer')
                                }
                            })}
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.neutrals['200'],
                                    mainColor: appConfig.theme.colors.neutrals['900'],
                                    mainColorHighlight: appConfig.theme.colors.primary['500'],
                                    backgroundColor: appConfig.theme.colors.neutrals['800'],
                                },
                            }}
                        />

                        <Button  styleSheet={{ cursor: buttonCursor }} type='submit' label='Entrar' fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: appConfig.theme.colors.primary['500'],
                                mainColorLight: appConfig.theme.colors.primary['400'],
                                mainColorStrong: appConfig.theme.colors.primary['600'],
                            }}
                        />

                    </Box>


                    <Box styleSheet={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '200px',
                        padding: '16px',
                        backgroundColor: appConfig.theme.colors.neutrals['800'],
                        border: '1px solid',
                        borderColor: appConfig.theme.colors.neutrals['999'],
                        borderRadius: '10px',
                        flex: 1,
                        minHeight: '240px',
                    }}>

                        <Image src={`https://github.com/${userInput.length < 2 ? '' : userInput}.png`} styleSheet={{borderRadius: '50%', marginBottom: '16px',}} />
                        
                        <Text variant="body4" styleSheet={{ color: appConfig.theme.colors.neutrals['200'],
                            backgroundColor: appConfig.theme.colors.neutrals['900'],
                            padding: '3px 10px',
                            borderRadius: '1000px'
                        }}>
                            {userInput.length < 2 ? '' : userInput}
                        </Text>
                    </Box>
                </Box>
            </Box>

        </>
    )
}

export default HomePage