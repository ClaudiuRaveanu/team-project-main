<>
            <Grid container> 

            
            <Grid item xs={6}>
                <Typography>Book List</Typography>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label='simple table'>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Number</TableCell>
                                    <TableCell>Book name</TableCell>
                                    <TableCell>Author</TableCell>
                                </TableRow>
                            </TableHead>
                        
                        <TableBody>
                            { data.map( (row, index) =>(

                                <TableRow key = {row._id}>
                                    <TableCell>{index}</TableCell>
                                    <TableCell component="th" scope="row">
                                    {  
                                     <Link 
                                        to = {{
                                                pathname:'/bookDetail',
                                                state:
                                                { data: data[index] }
                                        }}
                                     >{row.title}</Link>
                                    }
                                    </TableCell>
                                    <TableCell >{row.author}</TableCell>
                                </TableRow>
                                    
                            )
                            )}
                        </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
             
                <Link to='/addBook'> Add Books</Link>
                
            </Grid>
            
        </>