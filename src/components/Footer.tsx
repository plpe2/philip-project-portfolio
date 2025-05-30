import { Stack, Dialog } from '@mui/material'
import React from 'react'
import { footerContent } from './footerContent'

function Footer() {
  return (
    <Stack direction='row' spacing={2} sx={{
        color: 'white',
        backgroundColor: 'black',
        bottom: '0',
        position: 'fixed',
        justifyContent: 'center',
        width: '100%'
    }}>
        {footerContent.map((context, index) =>{
            return (
                <Stack direction='column' spacing={2} flexWrap='wrap' key={index}>
                    {context.header}
                    Links
                    {context['links'].map((links, Lindex) =>{
                        return (
                            <Stack key={Lindex}>
                                {links.text}
                            </Stack>
                        )
                    })}
                </Stack>
            )
        })}
    </Stack>
  )
}

export default Footer