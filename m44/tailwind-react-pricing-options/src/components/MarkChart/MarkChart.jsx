import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarkChart = ({marksPromise}) => {
    const marksDataRes = use(marksPromise);
    console.log(marksDataRes);
    /*
    
    Object
config
: 
{transitional: {…}, adapter: Array(3), transformRequest: Array(1), transformResponse: Array(1), timeout: 0, …}
data
: 
(10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
headers
: 
AxiosHeaders {cache-control: 'no-cache', content-length: '1604', content-type: 'application/json', date: 'Sat, 24 Jan 2026 04:52:04 GMT', etag: 'W/"1604-1769228321759"', …}
request
: 
XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
status
: 
200
statusText
: 
"OK"
    */ 
   const marksData = marksDataRes.data;
   // data processing for the chart
   const markChartData = marksData.map(studentData => {
    const student = {
        id: studentData.student_id,
        name: studentData.name,
        physics: studentData.marks.physics,
        chemistry: studentData.marks.chemistry,
        math: studentData.marks.math
    }

    const avg = (student.physics + student.chemistry + student.math) / 3;
    student.avg = avg;

    return student;
   })


   console.log(markChartData)
    return (
        <div>
            <BarChart width={500} height={300} data={markChartData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Bar dataKey="avg" fill='yellow'></Bar>
                <Bar dataKey={'chemistry'} fill='blue'></Bar>
                <Bar></Bar>

            </BarChart>
        </div>
    );
};

export default MarkChart;