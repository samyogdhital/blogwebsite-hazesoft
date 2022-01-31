import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  tagTypes: ["Blog"],

  endpoints: (builder) => ({
    getAllBlogs: builder.query({
      query: () => ({
        url: "blogs",
        method: "GET",
      }),
      transformResponse: (res) => res.reverse(),
      providesTags: ["Blog"],
    }),
    // getPostById: builder.query({
    //   query: (id) => ({
    //     url: `blogs/${id}`,
    //     method: "GET",
    //   }),
    // }),
    // getPostByLimit: builder.query({
    //   query: (num) => {
    //     return {
    //       url: `blogs?_limit=${num}`,
    //       method: "GET",
    //     };
    //   },
    // }),
    deletePost: builder.mutation({
      query: (id) => {
        return {
          url: `blogs/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Blog"],
    }),
    createPost: builder.mutation({
      query: (newPost) => {
        return {
          url: `blogs`,
          method: "POST",
          body: newPost,
        };
      },
      invalidatesTags: ["Blog"],
    }),
    updatePost: builder.mutation({
      query: (updatePostData) => {
        const { id, ...data } = updatePostData;
        return {
          url: `blogs/${id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["Blog"],
    }),
  }),
});

export const {
  useGetAllBlogsQuery,
  useGetPostByLimitQuery,
  useDeletePostMutation,
  useCreatePostMutation,
  useUpdatePostMutation,
} = blogApi;
