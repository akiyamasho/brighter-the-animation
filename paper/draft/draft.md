# Brighter the Animation: A Research and Application of the Combination of Western and Japanese Influences to Improve Efficiency and Quality of Anime Production (Phase 1)

Akiyama Shō (legal name: Virtucio Carlo)
akiyamashou@protonmail.com, rcpvirtucio@gmail.com

### Abstract

Anime production in Japan is an industry that ranges from a wide variety of production methods from traditional to 3-D. While most of modern anime productions are based on creating the whole process frame by frame, focusing on rich, imaginative themes not entirely based on reality, and making use of low-cost manual labor and/or outsourcing[3][4] and grueling work environment[5], I propose a production pipeline that makes use of technologies to reduce feedback loop, prevent repetitive manual labor, and increase overall efficiency of the whole production process from writing to direction to animation to post-processing. I start with writing the storyboards in an agile manner that is used as basis for moving rough 3D model with motion capture, leading to a more defined and visualised video storyboard. The draft animation is run in a faster feedback loop for reviewers that include sound composers, background artists, animators, and voice actors in the process, and is finalised before being passed on to animation and post-processing. At this point, the animation, sound, and voice is done simultaneously as a result of the video storyboard. In addition, further steps to include post-processing is included as additional information and next steps in the research but is not in the scope of this paper.

Note that **_anime production_** in this paper refers to the traditional, 2D frame-by-frame animation style, not 3DCG anime.

### Introduction

Japanese Animation, or anime, has been enjoyed as a form of recreation and expression both in Japan and internationally, and is now a 200 billion-yen industry[1][2]. Despite the its massive impact and growth, there are still major issues that can be observed in the efficiency of its production process and more importantly the work environment[6]. Current anime studios, with the exception of some studios such as Kyoto Animation[7], mainly hire freelancers and outsource work[8] to cut expenses. In addition to this, there exists an ever-growing stigma on otaku culture that is mainly caused by the industry's recurring themes in storytelling and character design[9][10][11].

In line with this, it is of great interest to solve these three aspects of the anime industry: mainly, **_the inefficiencies of production [12][13][14][15]_**, **_the work environment with low minimum wage and gruelling work hours[16][17]_**, and **_the stigma on otaku culture_**.

In this paper, I present a full pipeline on a combination of techniques taken from both western and Japanese studios and creators applied on the production of a short film, its pros and cons, and the potential research and applications of further improvement of the pipeline using both unconventional and classical technologies that include but are not limited to motion capture, computer science concepts, and machine learning. The main idea of the pipeline can be broken down into writing, storyboard direction, animation, and post-processing. So far, this study has been successfully applied to the first three steps: writing, storyboard direction, and animation. The short film was completed as a draft within the deadline, but post-processing has not been applied.

The film's storyline is created as a concept based on the both American band Paramore's song Brighter and the my own experiences, which is then drafted into character designs, object & costume list, and a mockup storyboard. The character designs are then converted into rough 3D models using Blender, and are used as animation reference for all the movements after converting the mockup storyboard into a full, finalised video with dynamic camera view angles that perfectly follow the song's transitions. These movements, camera angles, and transitions are then reviewed and re-tweaked easily due to automation of the storyboarding process with acting and motion capture. The finalised video is then treated as a full step-by-step guide to simply follow for animation and post-processing.

The research and production has been created with the restriction of having a full-time job, thereby limiting the amount of work to roughly 4 to 6 hours on weekdays and 8 to 12 hours on weekends. A deadline of August 31 has been set to prevent open-endedness and unlimited leeway for rework and editing. In addition, I do not have formal education in film and animation, and all parts of the process are simply created from experiences in acting in indie films & theater, first principles, computer science and basic machine learning background, and references on the current animation industries' methods. My current drawing and animation abilities is less than average, with only a single anime short film posted online in 2017 as experience.

### Related Work

Kyoto Animation's production process. Kyoto Animation is widely-known for its high attention to detail and quality animation that is based on a number of factors: direction, employee management, and training process. Firstly, their direction process focuses on improving full-time employees' abilities into animators who can both draw and direct, which is highly unconventional given the current industry's trend of outsourcing and dispatch hiring for keyin animation. Focusing on the direction process, the aim of storyboard artists and directors at Kyoto Animation is to more or less create a clear picture of their vision for animators to simply draw in, thereby focusing simply on improving the animation aspect[25] and not think much about how to draw and animate that vision. This applies a concept similar to Computer Science's widely-known Single Responsibility Principle[26], which manages complexity by having modules focus on a single function. This has been applied to the pipeline in this paper and improved using the said 3D modeling and motion capture processes.

Disney's Rotoscoping Process. Disney has been known to use rotoscoping[27] in feature films such as Snow White, Peter Pan, Sleeping Beauty, among others[28]. This has greatly improved the quality and efficiency of their animations by not having to perform multiple cycles fo trial and error when drawing characters, adding movements, and reworking the drawings after each cycle when animating. Moreover, this also more easily captures the human gestures and expressions since the actual frames are based on real life. However, rotoscoping has had mixed reception from both animators and the art community[29][30] due to it being completely similar to simply tracing on video and not an actual "art". In addition to this, rotoscoping limits the amount of actions animators can do compared to simply animation from imagination. This is precisely why only some aspects of the anime production process can use this method. Taking this concept, it is however possible to consider this more as an art of acting, rather than animation, and thus can be considered as a form of process speed improvement for both efficiency and speed. Complete rotoscoping has not been used in the proposed process, and only takes in motions of the 3D models moved through motion capture as a reference rather than a complete copy. The hair, clothes, and even the dynamics that all boil down to the 12 principles of animation is still applied, and this gives much more control on how the output is created. This is similar to simply using real-life models and mannequins as figure drawing reference.

### Proposed Approach

##### Overview

(TODO: Add image here for process)
The current anime production process can be divided into the following steps[31][32]:

1. Pre-production
   a. Writing
   b. Setting
   c. Character Designs
   D. Storyboard

2. Production
   a. Key Animation
   b. Keyin Animation
   c. Backgrounds

3. Post-processing
   a. Dubbing
   b. Sounds
   c. Music
   d. Colours, Shadows, and Filters

(TODO: Add image here for modified process)
In this case, each stage is a pre-requisite of the next one, meaning Dubbing cannot start until all the items in Production are completed. Taking these and the references into account, a new pipeline is used for creating Brighter the Animation:

1. Pre-production
   a. Writing
   b. Setting
   c. Character Designs
   D. Quick-draft Storyboard
   E. Motion-capture Storyboard
   F. Review

2a. Production - Visual
a. Animation
b. Backgrounds

2b. Production - Non-visual
a. Dubbing
b. Sounds
c. Music

3. Post-processing
   a. Merging
   b. Colours, Shadows and Filters

This new pipeline adds steps work on the pre-production stage, but by introducing this, the ability to concurrently do the visual and non-visual steps can be done, and due to the review stage in Pre-production, all stakeholders can provide inputs to improve the quality of the finalised storyboard. This prevents any unnecessary back-and-forth changes in the Production stage where the storyboards need to be rework after drawing the actual keyframes. In addition, key-frame and key-in animations for the characters can be more easily integrated since the 3D models with human-based movements can now be. Lastly, since motion-capture is introduced in Pre-production rather than rotoscoping, a single actor, which can also be the same person as the director, can act out all the characters. In addition, if the director is the same person as the actor, similar to how Brighter the Animation was created, it is much easier for the director to record and portray how the final output and vision should be implemented. This requires additional skill on the director/actor's part, but saves more time (and possibly expenses in a corporate environment).

Kindly note, however, that the short film is a music video and is constrained to the actual music, meaning this can be treated as the dubbing and sounds have been added before completing the storyboard. Further research and application of the pipeline into an full animation that incorporates sounds, ambient music and dubbing. This will be introduced in Phase 2 of the research.

##### Pre-production Stage

The writing, setting, character designs, and draft (paper) storyboard have been created from scratch. (TODO: add character designs, object list, and samples of draft storyboard here)

Due to financial limitations, use of actual production-level motion capture devices have not been tested. In line with this, a number of experiments with different motion capture/semi-rotoscoping methods for Brighter the Animation have been used:

(TODO: show gifs here)

1. Kinect V2 -> NI-Mate -> Blender Rigify (NG)
   This method is perfect for large actions such as dance and walking for minimal characters. However, hand movements are not accurate enough to be used as actual reference. Despite the fluidity of all other parts of the rig, the hands need to be drawn from scratch for each frame. This counted as a failure case and was not used in the short film.

(TODO: show video to images here)

2. Superimposing (Used, but not recommended)
   Due to the failure of Method 1, the initial part of the short film used actual video frames that have been re-sized to roughly fit the characters' proportions. These frames have been used for the body, and the head is based on the rough 3D models moved using Rigify on Blender to follow the video.

   This, however, made the proportions of the characters look inconsistent as shown in the images.

(TODO: show video to 3d here)

3. Video reference to Rigify in Blender (Used, but actual motion capture device is more efficient)
   After the failure of Method 2, a new method has been created based on how motion capture automates video to 3D model movements. Due to the lack of hardware, this step was manually done by using the videos as a reference[33]. This, however, serves as a good benchmark for the potential of the use of motion capture hardware with finalising storyboards and keyframes. This method has been used for the remainder of the short film.

4. Deep learning libraries for motion capture (OpenPose)[34](NG)
   There is a famous library called OpenPose that makes use of neural networks to estimate poses directly from video. This showed great potential, but after further study and trials, the following issues proved that this is not currently a viable solution: 1. The output keypoints (.json) of the library is only 2D and cannot be used in 3D software as without heavy remapping with calculus-based methods 2. There is a 3D keypoint that requires multiple cameras, but this requires the purchase of multiple FLIR cameras[35] setup to record motion 3. Despite the library being open-source, commercial use of the library requires \$25,000 per year[36]

   Due to these issues, simply buying a mid-level Perceptron Neuron motion capture device for \$1500[37] shows much more potential than using the library.

Based on the steps above, a finalised storyboard with all the transitions and keyframes based on the 3D models moved with motion capture can be created even before the actual drawing, and can be reviewed easily for any major changes before passing it on to the Production stage. In addition, the advantage of motion capture to simple rotoscoping is the ability for the camera view to be dynamically changed in the 3D software, giving much more freedom on how the scenes can be shown.

The limitation for this is that mocap is limited to characters. Objects are still created manually. However, these can be modularised using cel shading of 3d objects to make them backgrounds[38] and objects[39] look more like painted anime background. More on this topic in the Production stage.

##### Production Stage

(TODO: show video to 3d to output here, band)
After the completion of the finalised storyboards, this stage is simply referencing the 3D movements as actual keyframes and keyin frames for animation. Drawing and animation ability is still essential in this stage, as details with both the movement and character such as clothing, hair, and physics is still taken into account. This, however, solves the following issues: - Proportion and consistency - Proportion and consistency in drawings is difficult to master for one person, and having a consistent proportion for characters if drawn by multiple animators is a minute detail issue with anime[40] - Incorporating the CS concept of functions where having reusability for repetitive actions exponentially decreases feedback loop with both drawing and animation - Learning - Training and onboarding for new animators is much easier as practicing the characters' proportions is already eliminated - Efficiency and work environment - Having automation for lower level, repetitive process provides more time for a work-life balance for animators, which allows them to actually live life outside of work and incorporate those experiences into improving their craft - Since training and work hours can be improved with these methods, it is now possinble to actually hire less people that are full-time instead of paying lower-than-minimum wage[41] - With more time, additional details for the art can be introduced - This also includes handling of emergency cases; in the animation industry, it is very difficult to take vacation leaves because someone always needs to be able to fill in[42]

In addition to these, further research can be done for training machine learning models, particularly Generative Adversarial Networks to quickly convert the rendered 3D models into actual anime-style in the future once enough data is created. Inputs can include the rig position, camera view, and actual frame pixels that can be run on a series of convolutional and recurrent neural networks for the generator, and have these outputs run on a discriminator. This is merely a hypothesis but the potential of this is worth noting.

As discussed in the previous section, the backgrounds and objects can be recreated with cel shading and painting-style filters. In animation, especially in films, adding a good number of visual cues is essential for portraying a story, so simply using a photo as a background is nore entirely viable. This is precisely why Makoto Shinkai's semi-rotoscoped backgrounds are not simply traceovers of the videos, but are actually modified versions of the reference frames that include more detail and reworked objects.

(TODO: Add comparison of Kimi no Na Wa backgrounds here)

This, however, is mostly for feature films that focus more on art. For more industry-level anime such as advertisements where it is more important to focus on the product rather than minute details, there are some techniques that can be used to speed up the process with the use of actual photos. An example of this is the use of trained Generative Adversarial Networks for converting photos into actual Makoto Shinkai-, Hayao Miyazaki-, and Mamoru Hosoda-style-looking backgrounds.

(TODO: Add photos and outputs here)

For commercial use, however, using pre-trained models is not viable due to license & copyright and further research on how to create the dataset is needed. Again, however, the potential for this is worth noting.

##### Post-processing Stage

This is where the current research on Brighter the Animation failed. Post-processing requires a heavy amount of cleaning up of the lines for movement, adding animation to the shadows, and actual colouring.

(TODO: add movement for line drawings here vs simply drawing over vs cleaned up and coloured)

Further investigation on how parts of the process of this stage can be automated or improved.

There are some deep learning libraries that can do both the shadows and colouring, such as style2paints[45] and Preferred Network's PaintsChainer and similar implementations[46][47]. However, since these models were trained for single images, the lack of consistency for usage in animation makes it less viable. Research on additional recurrent neural network layers and retraining for these models are needed before they can be viable for use in animation.

### COMMERCIAL USE AND IMPACT

As discussed above, only the methods used for creating Brighter the Animation is possible for commercial use, since these do not make use of copyrighted material for training machine learning models nor does it require any expenmsive licensing. However, after the feasibility of automating parts of the process, use on actual commercial environment can be done, and the effectiveness can be tested and measured to try to solve the problems in the current issues with anime industry. In addition, having the potential of applying machine learning models in the more advanced phases after creating the data introduces more options for automation.

1. Automation of Repetitive, Low-level Tasks

   - With the current pipeline, a huge block of the process can already be reduced and the ability to proceed with the Production stage concurrently with sound, music, and dubbing can greatly reduce turnaround time with output
   - Addition of more advanced motion capture technologies that also include facial expressions will exponentially improve this method, as opposed to the current process where only the bodily movements are captured

2. Work Environment

   - Good animators can get a higher wage and the decreased need for additional members since lower-level tasks are now modularised
   - Since animators do not have dead time where there is no work, a company that applies this pipeline can now hire full-time employees, following most processes by Kyoto Animation as discussed in the previous sections, which makes it conducive for building a career in a more stable manner
   - In the best case, the animators can even be trained on working with ML or SE on their own, or have the extra time work on improving their art for un-automated tasks such as surreal art creation, non-human animation, backgrounds
   - On the edge case where there is really nothing to do, animators can simply take courses, create their own scripts for pipeline, research on improving the current processes, or improve their imaginative and artistic abilities

3. Lessening the Stigma on Anime/Otaku culture
   - As discussed previously, with work/life balance, animators can now have grounding on real life with their art.
   - Some personal notes on this include: - I believe having a concrete basis that is grounded on real life gives more input features for animators to include when thinking about animation and creating artworks. - Anime and filmmaking as an art is not merely drawing beautiful frames but tackles the complexity of real life issues, human interaction, and the psychology of behavior - With the current stigma on otaku culture, personally I would like to build a company that creates anime movies and series with more basis on real life, international influences including western and Asian culture, and deeper levels of nuance. The themes can vary but the acceptance criteria should always be strict in the sense that it should not just be a recurring-theme anime targetted to exploit primary human needs (e.g. - too much fanservice, unrealistic love stories, cliche). As media and entertainment people that can share information to the world on a larger scale, I think it's also a great opportunity to treat this as conveying different walks of life to both entertain and educate people on current events, human psychology, and motivate learning & growth

### CONCLUSION AND POSSIBLE NEXT STEPS

Aside from research purposes, Brighter the Animation as a short film is more of a passion project rather than something done for networking and submission to film festivals. It is not possible to submit this short film to any festival due to copyright with Paramore, and posting it online is only possible due to Fair Use Policy. In addition, it is estimated to complete postprocessing of this short film in 5 to 6 months, which could have been used for retraining and creation of shorter films for faster feedback loop.

These are the reasons why I will not be pursuing to complete the postprocessing as it would be more logical to focus on creating newer productions without using any copyrighted material. For the next stage of this research, an actual short film that makes use of original music and dubbing is the main priority. This next stage will be a clearer view on both the research and application aspects, and is also a way to get into the actual anime industry scene for networking and finding like-minded people to join and ultimately create a company that applies this paper's vision.

In addition, on the more technical side, some possible next steps include: - As discussed in the previous sections, research on training GANs to convert freestyle render to actual anime - how this would not be completely perfect but can be used as good initial frames ready to be cleaned up by animators - one hurdle for this method is animation of clothes, which may be a separate set of inputs and outputs for the models - Research on more in-depth motion capture models than OpenPose - https://arxiv.org/pdf/1808.07371.pdf - Research on PaintsChainer retraining for colour consistency with RNNs - Research feasibility of more direct pipelines that convert video directly to anime - https://arxiv.org/pdf/1809.01890.pdf - https://make.girls.moe - https://www.youtube.com/watch?v=GRQuRcpf5Gc - Wait for NVIDIA's frame interpolation SDK and research possibilities - (https://arxiv.org/abs/1712.00080) - http://www.cs.ubc.ca/labs/imager/tr/2017/DeepVideoDeblurring/ - https://twitter.com/jankautz/status/1034452797855608833

The major issue with using research material for application is it will take a lot of time and effort to create datasets that can be used commercially. This is why if funding becomes available for starting a company with this paper's vision, the first phase would most likely be use of the motion capture automation discussed in the previous sections rather than the deep learning libraries. Moreover, automated libraries are prone to becoming cookie-cutter processes that are not production-level, meaning the feasibility of using the library as a baseline rather than actual output and the application for high quality, production-level output be taken into account before considering that a library is viable.

### ADDITIONAL NOTES FOR FINDING PEOPLE WITH THE SAME VISION

\*\*note that in order for this vision to be easily introduced as a business model, Phase 2 must have a POC first. Brighter the Animation as a POC does not pass my acceptance criteria yet, and can be treated as purely research. however, it would be optimal if a VC can fund research on Phase 2 while a funded startup starts generating profit using current processes without ML for creating advertisements or short films

In line with these, I am pursuing to find to find colleagues that share the same vision in this endeavor.

After securing funding, hiring for charter members can start.

One ML research engineer, one sales engineer (N1 or native Japanese), and one animator (additional points if technical background is already present) would be the minimum. I can take up CEO role doing SE, ML, animation, direction, and writing until Series B (or earlier if profits are good and more people can be hired) when I plan to simply focus on direction, writing, and research after finding a more qualified CEO. Note that because I take up multiple roles, I will be working 16 hours 7 days a week; other members may opt in to work longer than 8 hours 5 days a week, but this is only if it is in their best interest. To prevent issues, we can use the standard Japanese 45-hour overtime policy, but working overtime should be discouraged since we have minimal funding. Up to 6 people can join for product-market fit stage.

TODO: find out pricing and profits for creating ads for companies as a starting profit generation scheme. also check if it’s possible to be funded for short films given a good storyboard (better than making money from ads)

Worst case if we are funded the minimum for a startup (5 million yen minus assumed 1 million for initial fees and 500,000 yen for buffer), the company can survive for 4 months without returns using the following:

- no office, everyone works from home or cafes (meals unfunded)
- will need to use own devices, but it is possible for me to share 1 extra Macbook Pro (13-inch, 2017 model) for MLE or salesperson, a 12.9” iPad Pro for sketching, and a Cintiq Pro 16 for heavy animation and drawing work. Note that the two animators can switch devices depending on necessity
- TODO: check fees for registration, taxes, 年金, and health insurance (assume 1 million yen as initial?)
- TODO: check if MLE is really needed in initial stages
- proposed salary: MLE (300,000/月), sales & animator (220,000/月), CEO (150,000/月), TODO: find out how to declare self as regular employee despite less than minimum wage)
- note that CEO expenses are the following: 110,000 for rent (80,000 for leopalace + internet, 30,000 for tenoha), 20,000 for food and living expenses (no rationing yet), 20,000 for extra/emergency
- TODO: find out if can be funded with patreon, kickstarter, ycombinator even if outside US jurisdiction. if all funds come from here it may be possible to not need a VC which reduces the risk of a high percentage shareholder directing the company into a different direction other than the vision in this <paper>
- TODO: check all possible funding sources (research for government, online campaigns, VCs)
- without MLE, it is possible to extend the initial funding by one more month

### References

[1] https://www.nippon.com/ja/features/h00279/
[2] https://www.excite.co.jp/News/product/20180820/Economic_81693.html?_p=2
[3] https://kotaku.com/the-average-anime-salary-in-japan-is-shockingly-low-1700892325
[4] https://kotaku.com/being-an-animator-in-japan-is-brutal-1690248803
[5] http://web.archive.org/web/20120928013719/ttp://www.tokyo-np.co.jp/article/entertainment/news/CK2012092502000153.html
[6] https://www.animenewsnetwork.com/interest/2017-06-07/nhk-program-discusses-anime-industry-financial-working-condition-problems/.117144
[7] http://www.kyotoanimation.co.jp/recruit/
[8] http://articles.latimes.com/2010/aug/19/business/la-fi-japan-anime-20100819
[9] https://jw-webmagazine.com/who-is-otaku-a9a8265f6f8c
[10] https://www.sophiacreeks.com/entry/2018/02/08/今のオタクは本当にキモいのか%28昔のオタクとの違
[11] http://toraooanime.wpblog.jp/anime_otaku
[12] https://comicsverse.com/anime-production/
[13] http://www.kanzenshuu.com/production/animation-process/
[14] http://ha.athuman.com/pa/clp_pa_05.php
[15] http://www1.tcue.ac.jp/home1/takamatsu/106259/sotsuron.html
[16] http://cultivationjapan.hatenablog.com/entry/2015/05/07/060000
[17] https://www.nhk.or.jp/gendai/articles/3987/
[18] https://imgur.com/a/XEHsG1Y
[19] https://blog.sakugabooru.com/wp-content/uploads/2017/09/euphostoryboard2.mp4
[20] https://imgur.com/a/gpso8od
[21] https://www.animenewsnetwork.com/feature/2015-12-02/what-makes-kyoto-animation-so-special/.95559
[22] https://www.japantimes.co.jp/culture/2017/11/02/films/kyoto-anime-studios-dedication-nuturing-talent-leads-big-screen-magic/#.W5TCiy2CiL4
[23] https://blog.sakugabooru.com/2017/03/10/anime-craft-weekly-33-kyoto-animation-studio-tour/
[24] http://www.kyotoanimation.co.jp/school/
[25] http://minyos.its.rmit.edu.au/aim/a_notes/anim_principles.html
[26] https://hackernoon.com/the-secret-behind-the-single-responsibility-principle-e2f3692bae25?gi=6f3c46e37d44
[27] https://blog.ed.ted.com/2017/05/31/animation-basics-what-is-rotoscoping/
[28] https://www.lomography.com/magazine/281907-rotoscoping-in-classic-disney-films
[29] http://www.escapistmagazine.com/forums/read/18.405620-Why-does-Rotoscoping-get-a-bad-rap
[30] https://tvtropes.org/pmwiki/pmwiki.php/Main/Rotoscoping
[31] http://www.pelleas.net/aniTOP/index.php/the-anime-production-line
[32] https://area.autodesk.jp/animation/workflow.html
[33] https://www.youtube.com/watch?v=on678RW8nRY
[34] https://github.com/CMU-Perceptual-Computing-Lab/openpose
[35] https://www.flir.com
[36] https://flintbox.com/public/project/47343/
[37] https://neuronmocap.com/content/product/32-neuron-edition-v2
[38] http://www.mclelun.com/2015/10/makoto-shinkai-style-painting-tutorial.html
[39] http://www.mclelun.com/2015/10/blender3d-anime-style-background-art.html
[40] https://kotaku.com/how-dragon-ball-z-characters-change-from-episode-to-epi-1723402760
[41] http://goboiano.com/p-a-works-now-pays-new-animators-22-less-than-mcdonalds/
[42] https://www.businessinsider.com/disney-animator-shares-best-and-worst-parts-of-her-job-2015-3
[43] http://openaccess.thecvf.com/content_cvpr_2018/papers/Chen_CartoonGAN_Generative_Adversarial_CVPR_2018_paper.pdf
[44] https://github.com/Yijunmaverick/CartoonGAN-Test-Pytorch-Torch
[45] https://github.com/lllyasviel/style2paints
[46] https://github.com/pfnet/PaintsChainer
[47] https://arxiv.org/abs/1705.01908

(TODO: decide if company creation should be included in paper)
(TODO: convert to latex)

# SPECIAL THANKS

I would like to thank these people for supporting my endeavors despite its unconventionality and even providing good references to aid the research:

    - Mehdi Shibahara
    - Omar Reid
    - Antoine Lecubin
    - Kelvin Tay
    - Paoloregel Samonte
    - Theresa Mercado
    - Jayzon Ty
    - Rishant Agarwal
    - Frederik Nakstad
    - Emanuele Frandi

You guys are awesome!
