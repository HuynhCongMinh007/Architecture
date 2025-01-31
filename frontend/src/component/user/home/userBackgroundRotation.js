import { useState, useEffect, useMemo } from "react";

function useBackgroundRotation() {
  const images = useMemo(() => [
    "https://res.cloudinary.com/dasqsts9r/image/upload/v1738058071/rs_w_1280_h_854_xitmqo.webp",
    "https://res.cloudinary.com/dasqsts9r/image/upload/v1738077970/uzfho1fszbsmym1vbgyu.jpg",
    "https://res.cloudinary.com/dasqsts9r/image/upload/v1738077970/azqo7gqtzganz5ks7tcy.jpg",
    "https://res.cloudinary.com/dasqsts9r/image/upload/v1738077970/oywawqucufwdk68luqet.jpg",
  ], []);

  const [backgroundImage, setBackgroundImage] = useState(images[0]);
  const [opacity, setOpacity] = useState(1); // Trạng thái opacity để tạo hiệu ứng mờ dần

  useEffect(() => {
    const interval = setInterval(() => {
      // Mờ dần ảnh trước khi đổi
      setOpacity(0); // Làm mờ
      setTimeout(() => {
        setBackgroundImage((prevImage) => {
          const currentIndex = images.indexOf(prevImage);
          return images[(currentIndex + 1) % images.length];
        });
      },900); // Sau 500ms thì thay đổi ảnh

      // Sau khi đổi ảnh, làm sáng lại
      setTimeout(() => {
        setOpacity(1); // Làm sáng ảnh
      }, 900); // Sau 1s thì làm sáng lại ảnh
    }, 4000); // Đổi ảnh sau mỗi 3 giây

    return () => clearInterval(interval);
  }, [images]);

  return { backgroundImage, opacity };
}

export default useBackgroundRotation;
