import * as Yup from 'yup';
  
export const createBlogValidationSchema = Yup.object().shape({
    title: Yup.string()
      .min(3, 'Judul terlalu pendek (min 3 karakter)')
      .max(255, 'Judul terlalu panjang (max 255 karakter)')
      .required('Judul wajib diisi'),
    content: Yup.string()
      .min(10, 'Konten terlalu pendek (min 10 karakter)')
      .required('Konten wajib diisi'),
    author: Yup.string()
      .min(2, 'Nama penulis terlalu pendek (min 2 karakter)')
      .required('Penulis wajib diisi'),
    created: Yup.string(),
  })