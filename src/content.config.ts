import { glob } from 'astro/loaders';
import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  loader: glob({base: './src/content/news', pattern: '**/[^_]*.{md,mdx}'}),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    heroImage: z.string(),
    heroImageAlt: z.string(),
    category: z.enum(['news', 'highlights']),
  }),
});

const flightTrainingCollection = defineCollection({
  loader: glob({base: './src/content/flight-training', pattern: '**/[^_]*.{md,mdx}'}),
  schema: z.object({
    // Standard metadata
    title: z.string(),
    description: z.string(),
    order: z.number().optional(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),

    // 1. Introduction Section
    programIntroduction: z.object({
      title: z.string(),
      subTitle: z.string().optional(),
      descriptionParagraphs: z.array(z.string()).optional(),
      highlights: z.array(z.object({
        highlightName: z.string(),
        highlightValue: z.string(),
        observation: z.string().optional()
      })).optional(),
      programHighlights: z.object({
        benefits: z.array(z.string()),
        requirements: z.array(z.string())
      }).optional()
    }).optional(),

    //  Training Environment/Expectations
    programExpectations: z.object({
      image: z.object({
        src: z.string(),
        alt: z.string(),
      }),
      title: z.string(),
      descriptionParagraphs: z.array(z.string()),
      listItems: z.array(z.string()).optional()
    }).optional(),

    // 2. First CTA Section
    firstCTA: z.object({
      image: z.object({
        src: z.string(),
        alt: z.string(),
      }),
      title: z.string(),
      subTitle: z.string().optional(),
      descriptionParagraphs: z.array(z.string()),
    }).optional(),

    // 3. What is Included Section
    whatIsIncluded: z.object({
      image: z.object({
        src: z.string(),
        alt: z.string(),
      }).optional(), 
      title: z.string(),
      subTitle: z.string(),
      descriptionParagraphs: z.array(z.string()).optional(),
      bulletPointLists: z.array(z.object({
        icon: z.string().optional(),
        title: z.string(),
        items: z.array(z.string())
      })).optional()
    }).optional(),

    // 4. Why Us Section
    whyUs: z.object({
      title: z.string(),
      subTitle: z.string().optional(),
      img: z.object({
        src: z.string(),
        alt: z.string(),
      }),
      topic: z.object({
        title: z.string(),
        descriptionParagraphs: z.array(z.string()),
      }).optional(),
      bulletList: z.object({
        title: z.string(),
        descriptionParagraphs: z.array(z.string()),
        bulletPoints: z.array(z.string()),
      }).optional(),
      closing: z.object({
        title: z.string(),
        descriptionParagraphs: z.array(z.string()),
      }).optional(),
    }).optional(),

    //  Target Audience (Who This Program Is For)
    targetAudience: z.object({
      title: z.string(),
      items: z.array(z.object({
        icon: z.string(),
        text: z.string()
      })),
      notFor: z.string().optional()
    }).optional(),
    
    //  Career/Incentives (Incentive-Based Progression)
    careerPathways: z.object({
      title: z.string(),
      subTitle: z.string().optional(),
      descriptionParagraphs: z.array(z.string()).optional(),
      opportunities: z.array(z.string()),
      disclaimer: z.string().optional()
    }).optional(),

    // 5. Training Progression Section
    trainingProgression: z.object({
      title: z.string(),
      subTitle: z.string().optional(),
      cards: z.array(z.object({
        title: z.string(),
        subTitle: z.string(),
        image: z.object({
          src: z.string(),
          alt: z.string(),
        }),
        descriptionParagraphs: z.array(z.string()).optional(),
        bulletPoints: z.array(z.string()).optional(),
      })).optional(),
      outcome: z.string().optional()
    }).optional(),

    //  Enrollment Process (How to Get Started)
    enrollmentProcess: z.object({
      title: z.string(),
      steps: z.array(z.object({
        title: z.string(),
        description: z.string()
      }))
    }).optional(),
    
    // 6. Final CTA Section
    finalCTA: z.object({
      image: z.object({
        src: z.string(),
        alt: z.string(),
      }),
      title: z.string(),
      subTitle: z.string().optional(),
      descriptionParagraphs: z.array(z.string()),
      ctas: z.array(z.object({
        url: z.string(),
        text: z.string(),
      })),
    }).optional(),
    
    // 7. FAQ Section
    faq: z.object({
      title: z.string().optional(),
      subTitle: z.string().optional(),
      qnas: z.array(z.object({
        question: z.string(),
        answer: z.string()
      })).optional(),
      categories: z.array(z.string()).optional(),
      showCategory: z.boolean().optional(),
    }).optional(),
  }),
});

const faqsCollection = defineCollection({
  type: "content",
  schema: z.object({
    question: z.string(),
    category: z.string().optional(),
    order: z.number().optional(),
  }),
});

export const collections = { 
  "flight-training": flightTrainingCollection, 
  news: blogCollection, 
  faqs: faqsCollection 
};
