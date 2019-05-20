# ABSTRACT

    - quick overview of paper and outline
    - how Brighter the animation is both an artistic expression of a story based on some real life events and how it served as research on anime production pipeline and machine learning
    - disclaimer that this is not an official research paper but more of a guideline on what vision is and to attract people with the same goals for both funding and finding comrades
    - use of engineering and first principles in whole process

# INTRODUCTION

    - current issues with industry (work env, otaku culture, repetitive tasks), give overview of solutions, and show impact (improved efficiency both for production and sales, and additional time for higher level items increased chance of evolving art into more complex structures, compare to scissors and manual cutting)
    - this is not meant to replace people and what the current processes in the industry are but is mainly focused on building a different company that adheres to a less traditional and efficiency/learning-first culture while still focusing on “traditional” animation

# PROBLEM STATEMENT

    - issues with direction
    - issues with actual animation
    - issues with current work environment in Japan's anime industry

# RESEARCHED METHODS FOR PIPELINE

    - show old pipeline with red marks (bidding -> writing/direction -> keyframing -> review and revision -> key-in -> colour and shadows -> postprocessing -> release)
    - show new pipeline (bidding -> writing/direction/revising using mocap/3d -> animation (keyframe and keyin can now be merged due to mocap and prepared 3d scenes) -> colours and shadows (potentially automatable but not in the scope of paper) -> postprocessing -> release)
    - direction stage
    	- current processes in the industry based on research
    	- MoCap (kinect/video->blender rigify)
    		- add OpenPose infeasibility (3d keypoints require multiple cameras, commercial license is 25,000 dollars yearly)
    		- add feasibility of MoCap for more detailed movements especially with hands
    	- reworking of drafts
    	- difficulty imagining and seeing the big picture
    	- difficulty doing transitions
    		- these can be easily finalised if the draft can be seen as is
    		- even frame count can be determined efficiently with this
    	- any good actor can now be able to be different characters without limitations of age, gender (super high level stuff!!)
    		- on the best case, a good actor (forward prop) plus a good director (backprop) can create the scenes easily for all characters. imagination is super high level, and it is very exciting to be doing this instead of menial frame by frame work
    	- scene creation and cameras and draft objects made with sketches can be done in Blender, Cinema4D, Maya, etc. (TODO: show examples)
    	- will be easier to convey to animators what the director's vision is, since director can easily review, revise, and explain the actual frames/scenes
    	- limitations
    		- mocap is limited to characters
    - animation stage
    	- current processes in the industry based on research
    	- with relation to DIR
    		- mocap data can be used to move production models
    		- before AN is started, DIR is already finalised and DIR staff can focus on research, improvement, study, or even working with AN (super efficient)
    			- it should be noted that DIR must not be changed anymore in this stage, unless
    				- benefit of changing it is extremely high and completion progress of scene to be changed is still low or zero
    				- note that changing something is HIGHLY DISCOURAGED, since this most often causes a chain reaction where other parts also need to be changed for consistency or flow
    			- due to the note above, it may be reasonable to NOT include DIR staff in AN
    			- this is why it is also recommended that DIR staff have both technical and artistic skill; after finalising direction can improve ML pipeline instead
    	- which stages in pipeline are repetitive
    	- issues with current
    		- this same frame by frame drawing has been here for decades, and nothing much has changed aside from simply improved drawing tools, data storage, and merging of frames. focus was simply to change the environment of animation, not the process.
    		- lack of proportion
    		- lack of consistency
    		- too much repeated 
    		- learning takes too much time and too difficult to teach (TODO add references here on how long it takes to study aspects of both drawing and animation, and how the industry is too steep for this to be considered a viable career option instead of a work of passion), whereas having automated processes for lower level tasks have concrete steps
    			- easier to onboard new people
    			- easier handling of emergency cases (e.g. - sick or vacation)
    				- connected to next part, but this way people can take more leaves (add link to next part regarding environment and culture)
    		- having automated lower level tasks can save on hiring, time, and can focus on research on higher level technology and art
    	- manual method for conversion of 3d to 2d
    	- possible ML solution for 3d -> 2d
    		- despite the new pipeline introduced in this section, ML can still be used to convert 3d to 2d and colouring (PaintsChainer)
    		- further research is needed for both line conversion and improved consistency of PaintsChainer
    - postprocessing stage
    	- detail out why this is the most difficult part
    	- add research for CartoonGAN
    - impacts on work environment and culture (given the efficiencies of the solutions above, it can now be possible to fix the following current issues)
    	- half minimum wage, 16-hour days 7 days a week, no work/life balance
    		- good animators can now get more than  minimum wage acting as both animators and ML data generation staff and no need for more people because of efficient processes
    		- since they do not have dead time, companies can now hire full-time employees
    		- in the best case, the animators can even be trained on working with ML or SE on their own, or have the extra time work on improving their art for un-automated tasks such as surreal art creation, non-human animation, backgrounds
    		- with work/life balance, animators can now have grounding on real life with their art. personal notes:
    			- I believe having a concrete basis that is grounded on real life gives more input features for animators to include when thinking about animation and creating artworks.
    			- anime and filmmaking as an art is not merely drawing beautiful frames but tackles the complexity of real life issues, human interaction, and the psychology of behavior
    			- (add link to personal history with dealing with otaku culture growing up) with the current stigma on otaku culture, personally I would like to build a company that creates anime movies and series with more international influences, including western, and Asian culture with deeper levels of nuance. the themes can vary but the acceptance criteria should always be strict in the sense that it should not just be some cookie cutter anime targetted to exploit primary human needs (e.g. - too much fanservice, unrealistic love stories, cliche, link 500 days of summer quitting scene here?). as media and entertainment people that can share information to the world on a larger scale, I think it's also a great opportunity to treat this as conveying different walks of life to both entertain and educate people on current events, human psychology, and motivate learning & growth
    	- difficulty of building career + no job security (show classic exception of KyoAni vs other companies)
    		- since there is always data to be cleaned up for retraining, they will always have work to do especially when DIR stage is being done
    		- on the edge case where there is really nothing to do, animators can simply take courses, create their own scripts for pipeline, research on improving the current processes, or improve their imaginative and artistic abilities

# NEXT STEPS

    - conversion of OpenPose .json output to blender usable data for Empties
    - research on training GANs to convert freestyle render to actual anime
    	- how this would not be completely perfect but can be used as good initial frames ready to be cleaned up by animators
    - research on PaintsChainer retraining for colour consistency with RNNs
    - research frame interpolation nvidia
    	- (https://arxiv.org/abs/1712.00080)
    	- http://www.cs.ubc.ca/labs/imager/tr/2017/DeepVideoDeblurring/
    	- https://twitter.com/jankautz/status/1034452797855608833

\*\*note that before this can be pitched as a business, these next steps must have a POC first. Brighter as a POC does not pass my acceptance criteria yet, and can be treated as purely research. however, it would be optimal if a VC can fund research on Next Steps while funded startup starts generating profit using current processes without ML for creating advertisements or short films

In line with these, I am pursuing to find 仲間 in this endeavor. After securing funding, hiring for charter members can start.

One ML research engineer, one sales engineer (N1 or native Japanese), and one animator (additional points if technical background is already present) would be the minimum. I can take up CEO role doing SE, ML, animation, direction, and writing until Series B (or earlier if profits are good and more people can be hired) when I plan to simply focus on direction, writing, and research after finding a more qualified CEO. Note that because I take up multiple roles, I will be working 16 hours 7 days a week; other members may opt in to work longer than 8 hours 5 days a week, but this is only if it is in their best interest. To prevent issues, we can use the standard Japanese 45-hour overtime policy, but working overtime should be discouraged since we have minimal funding. Up to 6 people can join for product-market fit stage.

TODO: find out pricing and profits for creating ads for companies as a starting profit generation scheme. also check if it’s possible to be funded for short films given a good storyboard (better than making money from ads)

Worst case if we are funded the minimum for a startup (5 million yen minus assumed 1 million for initial fees and 500,000 yen for buffer), the company can survive for 4 months without returns using the following:

-   no office, everyone works from home or cafes (meals unfunded)
-   will need to use own devices, but it is possible for me to share 1 extra Macbook Pro (13-inch, 2017 model) for MLE or salesperson, a 12.9” iPad Pro for sketching, and a Cintiq Pro 16 for heavy animation and drawing work. Note that the two animators can switch devices depending on necessity
-   TODO: check fees for registration, taxes, 年金, and health insurance (assume 1 million yen as initial?)
-   TODO: check if MLE is really needed in initial stages
-   proposed salary: MLE (300,000/月), sales & animator (220,000/月), CEO (150,000/月), TODO: find out how to declare self as regular employee despite less than minimum wage)
-   note that CEO expenses are the following: 110,000 for rent (80,000 for leopalace + internet, 30,000 for tenoha), 20,000 for food and living expenses (no rationing yet), 20,000 for extra/emergency
-   TODO: find out if can be funded with patreon, kickstarter, ycombinator even if outside US jurisdiction. if all funds come from here it may be possible to not need a VC which reduces the risk of a high percentage shareholder directing the company into a different direction other than the vision in this <paper>
-   TODO: check all possible funding sources (research for government, online campaigns, VCs)
-   without MLE, it is possible to extend the initial funding by one more month

# REFERENCES

    - OpenPose (https://github.com/CMU-Perceptual-Computing-Lab/openpose)
    - Super SloMo (https://arxiv.org/abs/1712.00080)
    - CartoonGAN (https://arxiv.org/abs/1712.00080)

# SPECIAL THANKS

    - mehdi
    - omar
    - antoine
    - kelvin
    - paolo
    - theresa
    - jayzon
    - rishant
    - frederik
