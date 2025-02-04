import { useState, useEffect } from "react";

function useBackgroundRotation() {
  const [images, setImages] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState('');
  const [opacity, setOpacity] = useState(1); // Trạng thái opacity để tạo hiệu ứng mờ dần

  useEffect(() => {
    // Lấy danh sách ảnh từ API
    const fetchImages = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/home`);
        if (!response.ok) {
          throw new Error("Không thể lấy dữ liệu");
        }
        const data = await response.json();
        setImages(data); // Giả sử dữ liệu trả về là một mảng các URL ảnh
        setBackgroundImage(data[0].url); // Set ảnh đầu tiên làm ảnh nền ban đầu
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu ảnh:", error);
      }
    };

    fetchImages();
  }, []); // Lấy dữ liệu chỉ 1 lần khi component mount

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      // Mờ dần ảnh trước khi đổi
      setOpacity(0); // Làm mờ
      setTimeout(() => {
        setBackgroundImage((prevImage) => {
          const currentIndex = images.indexOf(prevImage);
          return images[(currentIndex + 1) % images.length];
        });
      }, 900); // Sau 500ms thì thay đổi ảnh

      // Sau khi đổi ảnh, làm sáng lại
      setTimeout(() => {
        setOpacity(1); // Làm sáng ảnh
      }, 900); // Sau 1s thì làm sáng lại ảnh
    }, 4000); // Đổi ảnh sau mỗi 4 giây

    return () => clearInterval(interval);
  }, [images]);

  return { backgroundImage, opacity };
}

export default useBackgroundRotation;
