import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function useBackgroundRotation() {
  const { id } = useParams(); // Lấy id từ URL
  console.log("id project:", id);
  
  const [images, setImages] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (!id) return; // Đảm bảo có id trước khi gọi API

    fetch(`${process.env.REACT_APP_API_URL}/api/projects/img/${id}`) // Gọi API lấy danh sách ảnh dựa trên id
      .then((res) => res.json())
      .then((data) => {
        console.log("data img poster:", data);
        if (Array.isArray(data) && data.length > 0) {
          setImages(data);
          setBackgroundImage(data[0]); // Ảnh đầu tiên
        }
      })
      .catch((error) => console.error("Error fetching images:", error));
  }, [id]);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setOpacity(0);

      setTimeout(() => {
        setBackgroundImage((prevImage) => {
          const currentIndex = images.indexOf(prevImage);
          const nextIndex = (currentIndex + 1) % images.length;
          return images[nextIndex];
        });
      }, 900);

      setTimeout(() => {
        setOpacity(1);
      }, 900);
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);

  return { backgroundImage, opacity };
}

export default useBackgroundRotation;
