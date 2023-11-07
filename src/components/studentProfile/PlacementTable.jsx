import React from 'react'
import { useEffect } from 'react'

const PlacementTable = (props) => {
    useEffect(
        () => { const department = window.localStorage.getItem("department") },[department]
    )
    
  return (
     <table className='tableBody'>
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Placement Count</th>
                            <th>Total Students Appeared</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr>
                            
                            <td>2019</td>
                            <td>
                                56
                            </td>
                            <td>
                                60
                            </td>
                        </tr>
                        <tr>
                            <td>2020</td>
                            <td>
                                56
                            </td>
                            <td>
                                60
                            </td>
                        </tr>
                        <tr>
                            <td>2021</td>
                            <td>
                                45
                            </td>
                            <td>
                                60
                            </td>
                        </tr>
                        <tr>
                            <td>2022</td>
                            <td>
                                51
                            </td>
                            <td>
                                60
                            </td>
                        </tr>
                        <tr>
                            <td>2023</td>
                            <td>
                                56
                            </td>
                            <td>
                                60
                            </td>
                        </tr>
                        

                    </tbody>
                </table>
  )
}

export default PlacementTable