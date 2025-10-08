import Img1 from "../../public/images/blowout.jpg";
import Img2 from "../../public/images/groom.jpg";
import Img3 from "../../public/images/spa.jpg";
import Nail from "../../public/images/nail.jpg";
import Ear from "../../public/images/ear.jpg";
import Teeth from "../../public/images/teeth.jpg";
import Flea from "../../public/images/flea.jpg";
import Deshedding from "../../public/images/deshedding.jpg";
import Cut from "../../public/images/cut.jpg";
import Massage from "../../public/images/massage.jpg";
import Hydrotherapy from "../../public/images/water.jpg";
import Old from "../../public/images/old.jpg";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const services = [
  {
    id: 1,
    title: "Bath  Blowout",
    slug: slugify("Bath  Blowout"),
    price: "$50",
    copy: "A refreshing bath and blowout for your pet.",
    description:
      "Our Bath Blowout service provides your pet with a thorough cleansing using gentle, pet-safe shampoos. After the bath, we use professional dryers to give your pet a soft, fluffy finish. This service helps remove dirt, loose hair, and odors, leaving your pet looking and feeling fresh. It's ideal for pets who need a quick refresh between full grooming appointments.",
    features: [
      {
        id: 1.1,
        title: "Gentle Shampoo",
        details:
          "We use hypoallergenic, pet-safe shampoos to ensure a deep clean without irritation.",
      },
      {
        id: 1.2,
        title: "Professional Blowout",
        details:
          "High-velocity dryers fluff and dry your pet's coat for a smooth, soft finish.",
      },
      {
        id: 1.3,
        title: "Odor Removal",
        details: "Removes dirt and odors, leaving your pet smelling fresh.",
      },
      {
        id: 1.4,
        title: "Brushing",
        details:
          "Thorough brushing before and after the bath to remove tangles and loose fur.",
      },
      {
        id: 1.5,
        title: "Coat Conditioning",
        details: "Optional coat conditioner for added softness and shine.",
      },
    ],
    src: Img1,
    src2: Img1,
  },
  {
    id: 2,
    title: "Full Grooming",
    slug: slugify("Full Grooming"),
    price: "$75",
    copy: "Complete grooming service including bath, cut, and styling.",
    description:
      "Our Full Grooming package covers every aspect of your pet’s hygiene and appearance. It includes a bath, haircut, nail trim, ear cleaning, and styling tailored to your pet’s breed and preferences. Our experienced groomers ensure your pet is comfortable throughout the process. This service is perfect for maintaining your pet’s health and keeping them looking their best.",
    features: [
      {
        id: 2.1,
        title: "Breed-Specific Styling",
        details:
          "Haircuts and styling are customized to your pet’s breed and your preferences.",
      },
      {
        id: 2.2,
        title: "Comprehensive Hygiene",
        details:
          "Includes nail trimming, ear cleaning, and sanitary trim for complete care.",
      },
      {
        id: 2.3,
        title: "Comfort-Focused",
        details:
          "Our groomers use gentle techniques to keep pets relaxed and happy.",
      },
      {
        id: 2.4,
        title: "Nail Trimming Included",
        details:
          "Nail trimming is part of the full grooming package for your pet’s comfort.",
      },
      {
        id: 2.5,
        title: "Ear Cleaning Included",
        details:
          "Gentle ear cleaning to maintain your pet’s ear health and hygiene.",
      },
    ],
    src: Img2,
    src2: Img2,
  },
  {
    id: 3,
    title: "Spa Add-Ons",
    slug: slugify("Spa Add-Ons"),
    price: "$125",
    copy: "Pamper your pet with our luxurious spa add-ons.",
    description:
      "Enhance your pet’s grooming experience with our Spa Add-Ons. Choose from a variety of treatments such as deep conditioning, aromatherapy, and paw balm application. These extras are designed to nourish your pet’s skin and coat while providing relaxation. Spa Add-Ons are perfect for pets who deserve a little extra pampering.",
    features: [
      {
        id: 3.1,
        title: "Deep Conditioning",
        details:
          "Special treatments to hydrate and strengthen your pet’s coat.",
      },
      {
        id: 3.2,
        title: "Aromatherapy",
        details:
          "Calming scents help reduce stress and create a soothing environment.",
      },
      {
        id: 3.3,
        title: "Paw Balm Application",
        details: "Protects and moisturizes your pet’s paws for added comfort.",
      },
      {
        id: 3.4,
        title: "Facial Scrub",
        details: "Gentle facial scrub to cleanse and brighten your pet’s face.",
      },
      {
        id: 3.5,
        title: "Soothing Mud Bath",
        details: "Mineral-rich mud bath to nourish skin and relieve irritation.",
      },
    ],
    src: Img3,
    src2: Img3,
  },
  {
    id: 4,
    title: "Nail Trimming",
    slug: slugify("Nail Trimming"),
    price: "$20",
    copy: "Keep your pet's nails trimmed and healthy.",
    description:
      "Our Nail Trimming service ensures your pet’s nails are kept at a safe and comfortable length. Regular trims prevent painful splitting and reduce the risk of injury. We use specialized tools and gentle handling to minimize stress. This service is essential for your pet’s overall health and mobility.",
    features: [
      {
        id: 4.1,
        title: "Safe Nail Clipping",
        details:
          "Professional tools and techniques for precise, safe nail trims.",
      },
      {
        id: 4.2,
        title: "Stress-Free Experience",
        details: "Gentle handling to keep your pet calm during the process.",
      },
      {
        id: 4.3,
        title: "Quick Appointments",
        details:
          "Efficient service for minimal disruption to your pet’s routine.",
      },
      {
        id: 4.4,
        title: "Dremel Smoothing",
        details:
          "Optional rotary tool smoothing for rounded, snag-free nail edges.",
      },
      {
        id: 4.5,
        title: "Paw Inspection",
        details:
          "Check for cracks, injuries, or foreign objects during the nail trim.",
      },
    ],
    src: Nail,
    src2: Nail,
  },
  {
    id: 5,
    title: "Ear Cleaning",
    slug: slugify("Ear Cleaning"),
    price: "$15",
    copy: "Keep your pet's ears clean and free of debris.",
    description:
      "Our Ear Cleaning service removes wax, dirt, and debris from your pet’s ears to prevent infections and discomfort. We use gentle, pet-safe solutions and techniques to ensure a thorough clean. Regular ear care is important for pets prone to ear issues. This service helps maintain your pet’s ear health and comfort.",
    features: [
      {
        id: 5.1,
        title: "Gentle Cleaning Solutions",
        details:
          "Non-irritating products are used to clean your pet’s ears safely.",
      },
      {
        id: 5.2,
        title: "Infection Prevention",
        details:
          "Removes buildup that can lead to ear infections and discomfort.",
      },
      {
        id: 5.3,
        title: "Routine Maintenance",
        details:
          "Recommended for pets with floppy ears or frequent ear issues.",
      },
      {
        id: 5.4,
        title: "Odor Control",
        details: "Removes odors caused by wax and debris for fresher-smelling ears.",
      },
      {
        id: 5.5,
        title: "Ear Health Check",
        details: "Visual inspection for signs of infection or irritation.",
      },
    ],
    src: Ear,
    src2: Ear,
  },
  {
    id: 6,
    title: "Teeth Brushing",
    slug: slugify("Teeth Brushing"),
    price: "$30",
    copy: "Maintain your pet's dental hygiene with our teeth brushing service.",
    description:
      "Our Teeth Brushing service helps maintain your pet’s oral health by removing plaque and freshening breath. We use pet-safe toothpaste and brushes designed for comfort and effectiveness. Regular dental care can prevent gum disease and other health issues. This service is a simple way to keep your pet’s smile bright and healthy.",
    features: [
      {
        id: 6.1,
        title: "Plaque Removal",
        details: "Removes buildup to prevent dental disease and bad breath.",
      },
      {
        id: 6.2,
        title: "Pet-Safe Products",
        details:
          "Toothpaste and brushes are formulated for pets’ safety and comfort.",
      },
      {
        id: 6.3,
        title: "Oral Health Education",
        details: "Advice on maintaining your pet’s dental hygiene at home.",
      },
      {
        id: 6.4,
        title: "Fresh Breath",
        details: "Helps reduce bad breath and promotes a healthy mouth.",
      },
      {
        id: 6.5,
        title: "Gum Massage",
        details: "Gentle brushing stimulates gums and supports oral health.",
      },
    ],
    src: Teeth,
    src2: Teeth,
  },
  {
    id: 7,
    title: "Flea Treatment",
    slug: slugify("Flea Treatment"),
    price: "$40",
    copy: "Effective flea treatment to keep your pet comfortable.",
    description:
      "Our Flea Treatment service targets and eliminates fleas from your pet’s coat using safe, effective products. We also provide advice on preventing future infestations. This service helps relieve itching and discomfort, ensuring your pet is happy and healthy. Regular flea control is essential for pets who spend time outdoors.",
    features: [
      {
        id: 7.1,
        title: "Fast-Acting Solutions",
        details:
          "Products work quickly to eliminate fleas and soothe your pet’s skin.",
      },
      {
        id: 7.2,
        title: "Preventative Advice",
        details: "Guidance on keeping your pet flea-free after treatment.",
      },
      {
        id: 7.3,
        title: "Safe for All Pets",
        details: "Treatments are chosen based on your pet’s age and health.",
      },
      {
        id: 7.4,
        title: "Itch Relief",
        details: "Soothing treatments to relieve itching and irritation caused by fleas.",
      },
      {
        id: 7.5,
        title: "Follow-Up Recommendations",
        details: "Personalized advice for ongoing flea prevention and care.",
      },
    ],
    src: Flea,
    src2: Flea,
  },
  {
    id: 8,
    title: "De-shedding",
    slug: slugify("De-shedding"),
    price: "$60",
    copy: "Reduce shedding with our specialized de-shedding service.",
    description:
      "Our De-shedding service uses specialized tools and techniques to remove loose hair from your pet’s undercoat. This reduces shedding around your home and keeps your pet’s coat healthy. Regular de-shedding can also help prevent matting and skin issues. It’s ideal for breeds with thick or double coats.",
    features: [
      {
        id: 8.1,
        title: "Undercoat Removal",
        details:
          "Special tools reach deep to remove loose hair from the undercoat.",
      },
      {
        id: 8.2,
        title: "Mat Prevention",
        details:
          "Reduces the risk of tangles and mats forming in your pet’s fur.",
      },
      {
        id: 8.3,
        title: "Healthier Coat",
        details: "Promotes a shiny, healthy coat and reduces allergens.",
      },
      {
        id: 8.4,
        title: "Allergy Reduction",
        details: "Removes dander and loose fur to help reduce allergens in your home.",
      },
      {
        id: 8.5,
        title: "Skin Health Check",
        details: "Inspection for skin issues or irritations during the de-shedding process.",
      },
    ],
    src: Deshedding,
    src2: Deshedding,
  },
  {
    id: 9,
    title: "Specialty Cuts",
    slug: slugify("Specialty Cuts"),
    price: "$80",
    copy: "Custom grooming cuts tailored to your pet's needs.",
    description:
      "Our Specialty Cuts service offers custom grooming styles for your pet, from breed-specific trims to creative designs. Our groomers consult with you to achieve the look you want while ensuring your pet’s comfort. Specialty cuts can help manage coat length and highlight your pet’s personality. This service is perfect for pets who need a unique or functional style.",
    features: [
      {
        id: 9.1,
        title: "Custom Styling",
        details:
          "Work with our groomers to choose the perfect cut for your pet.",
      },
      {
        id: 9.2,
        title: "Creative Designs",
        details: "Options for fun, creative trims and patterns.",
      },
      {
        id: 9.3,
        title: "Comfort and Safety",
        details: "Cuts are designed to be comfortable and safe for your pet.",
      },
      {
        id: 9.4,
        title: "Breed-Specific Trims",
        details: "Expertise in grooming styles for various breeds.",
      },
      {
        id: 9.5,
        title: "Functional Cuts",
        details: "Styles that enhance your pet's comfort and mobility.",
      },
    ],
    src: Cut,
    src2: Cut,
  },
  {
    id: 10,
    title: "Pet Massage",
    slug: slugify("Pet Massage"),
    price: "$70",
    copy: "Relax your pet with a soothing massage.",
    description:
      "Our Pet Massage service helps your pet relax and unwind, reducing stress and muscle tension. Gentle techniques are used to improve circulation and flexibility. Massage can be especially beneficial for older pets or those recovering from injury. Give your pet the gift of relaxation and improved well-being.",
    features: [
      {
        id: 10.1,
        title: "Stress Relief",
        details: "Massage techniques help calm anxious or nervous pets.",
      },
      {
        id: 10.2,
        title: "Improved Circulation",
        details: "Gentle pressure increases blood flow and promotes healing.",
      },
      {
        id: 10.3,
        title: "Flexibility Support",
        details: "Helps maintain joint flexibility and muscle tone.",
      },
      {
        id: 10.4,
        title: "Pain Relief",
        details: "Massage can help alleviate discomfort from arthritis or injury.",
      },
      {
        id: 10.5,
        title: "Bonding Time",
        details: "Massage sessions provide quality time for you and your pet.",
      },
    ],
    src: Massage,
    src2: Massage,
  },
  {
    id: 11,
    title: "Hydrotherapy",
    slug: slugify("Hydrotherapy"),
    price: "$90",
    copy: "Therapeutic water treatment for your pet's joints and muscles.",
    description:
      "Our Hydrotherapy service uses water-based exercises to support your pet’s joint and muscle health. It’s ideal for pets recovering from surgery, injury, or those with arthritis. Hydrotherapy is low-impact and helps improve mobility, strength, and overall well-being. Our trained staff ensure your pet’s safety and comfort throughout the session.",
    features: [
      {
        id: 11.1,
        title: "Low-Impact Exercise",
        details: "Water-based activities reduce strain on joints and muscles.",
      },
      {
        id: 11.2,
        title: "Rehabilitation Support",
        details: "Ideal for pets recovering from injury or surgery.",
      },
      {
        id: 11.3,
        title: "Arthritis Relief",
        details: "Helps manage pain and improve mobility for older pets.",
      },
      {
        id: 11.4,
        title: "Strength Building",
        details: "Water resistance helps build muscle strength and endurance.",
      },
      {
        id: 11.5,
        title: "Stress Reduction",
        details: "Calming environment helps reduce anxiety and stress.",
      },
    ],
    src: Hydrotherapy,
    src2: Hydrotherapy,
  },
  {
    id: 12,
    title: "Senior Pet Care",
    slug: slugify("Senior Pet Care"),
    price: "$100",
    copy: "Specialized care for older pets to ensure their comfort and well-being.",
    description:
      "Our Senior Pet Care service is tailored to the unique needs of aging pets. We provide gentle grooming, health checks, and comfort-focused treatments to support their well-being. Our staff are trained to handle senior pets with extra care and patience. This service helps older pets stay comfortable, clean, and happy in their golden years.",
    features: [
      {
        id: 12.1,
        title: "Gentle Grooming",
        details:
          "Extra care is taken to ensure comfort for sensitive senior pets.",
      },
      {
        id: 12.2,
        title: "Health Monitoring",
        details: "Basic health checks are performed during grooming sessions.",
      },
      {
        id: 12.3,
        title: "Mobility Assistance",
        details: "Support for pets with limited mobility or special needs.",
      },
      {
        id: 12.4,
        title: "Cognitive Enrichment",
        details: "Activities designed to stimulate your pet's mind.",
      },
      {
        id: 12.5,
        title: "Nutritional Guidance",
        details: "Advice on diet and nutrition for senior pets.",
      },
    ],
    src: Old,
    src2: Old,
  },
] as const;
