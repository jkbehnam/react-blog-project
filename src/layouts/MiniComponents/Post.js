import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";


function Post() {
    return (
     <Card sx={{mb:2}}>
        <CardActionArea>
            <CardMedia sx={{height:{xs:'150px',sm:'300px',md:"400px"}}} image="https://cdn01.zoomit.ir/2022/5/samsung-galaxy-a13.jpg?w=700" />
            <CardContent>
                <Typography gutterBottom variant="h5">متن ساختگی لورم </Typography>
                <Typography variant="body">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">بیشتر بخوانید</Button>
            </CardActions>
        </CardActionArea>

     </Card>
    );
  }
  
  export default Post;